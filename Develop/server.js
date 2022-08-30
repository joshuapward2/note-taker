const express = require('express');
const app = express();
const path = require('pat;h');
const fs = require('fs');

const notes = require('./db/db.json');

let randomId = Math.floor(Math.random()*10000000)


const PORT = process.env || 3000;



// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//HTML Routes


app.get('/notes',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'notes.html'));
  
});

app.get('/',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'index.html'));
  
});

app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, 'index.html'));
  
})
  


app.use(express.static('public'));





//Api Routes


app.get('/api/notes', (req, res) => {
    res.json()
});


app.post('/api/notes', (req, res) =>{

} )






app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));