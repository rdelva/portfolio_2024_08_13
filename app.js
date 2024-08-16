const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());    

app.get('/', (request, response)=> {
    response.send('I love treehouse');
});

app.get('/', (request, response)=> {
    response.send('I love treehouse');
});

app.listen(3000, () =>{
    console.log('The application is running on localhost:3000');
});
