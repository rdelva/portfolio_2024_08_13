const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());    

app.get('/', (req, res)=> {
    res.send('I love treehouse');
});

app.get('/aboutme', (req, res)=> {
    res.send('About Me');
});


app.get('/contact me', (req, res)=> {
    res.send('Contact Me');
});


//Sets up the devlopment server which will run on my machine
app.listen(3000, () =>{
    console.log('The application is running on localhost:3000');
});
