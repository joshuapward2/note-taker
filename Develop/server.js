const express = require('express');
const app = express();
const PORT = 3000;




app.get('/notes.html',(req, res) => {
    reg.
    res.send('Hello World!');
    res.render('notes')
});

app.get('/index.html',(req, res) => {
    reg.
    res.send('Hello World!');
    res.render('index')
});

app.use(express.static('public'));


app.get('/api/notes', (req, res) => {
    req.

});

app.post('/api/notes', )


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));