const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const notes = require('./db/db.json');
const { Router } = require('express');

let randomId = Math.floor(Math.random()*10000000)


const PORT = process.env.PORT || 3000;





// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//HTML Routes


app.get('/notes',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'public/notes.html'));
  
});

app.get('/',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'public/index.html'));
  
});




app.use(express.static('public'));



//Api Routes


app.get('/api/notes', (req, res) => {
    res.json(notes)
});


app.post('/api/notes', (req, res) =>{
   
    if(req.body) {
        const addedNote = req.body;
        req.body.id = Math.floor(Math.random()*100000000000)
    notes.push(addedNote);

    }

    else{
        res.send("Please enter a note")
    }


    // Write file
fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify(notes)
)
res.json(notes)

} )





//Delete route

app.delete('/api/notes/:id', (req, res) =>{
    console.log(req)
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].id == req.params.id) {
            console.log(notes[i])
            notes = notes.splice(i,1)
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notes)
            )
            
            res.json(notes)

        }
       
        
    }
})




// Server listening on port

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));