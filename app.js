const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use('/static', express.static('public'));


app.set('view engine', 'pug');




app.get('/', (req, res)=> {
    res.render('index');
});

app.get('/aboutme', (req, res)=> {
    res.render('aboutme');
});


app.get('/contactme', (req, res)=> {
    res.send('Contact Me');
});


//Sets up the devlopment server which will run on my machine
app.listen(3000, () =>{
    console.log('The application is running on localhost:3000');
});
