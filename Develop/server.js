const express = require('express');
const app = express();
const PORT = 3000;
const notes = require('./db/db.json');
const path = require('path');

let randomId = Math.floor(Math.random()*10000000)

//HTML Routes


app.get('/notes',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'notes.html'));
  
});

app.get('/',(req, res) => {
    
    res.sendFile(path.join( __dirname, 'index.html'));
  
});
  


app.use(express.static('public'));


//Api Routes


app.get('/api/notes', (req, res) => {
    res.json()
});


app.post('/api/notes', (req, res) =>{

} )






app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));