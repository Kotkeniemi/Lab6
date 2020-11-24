/*
        AARON ELIAHOO 500640345 LAB 6 SUBMISSION

        THIS IS A TEMPLATE TO BE USED WITH POSTMAN FOR POSTING DATA 
  "Title": " ",
    "Author": " ",
    "Publisher": " ",
    "Date": "",
    "URL": ""
*/


import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routing/books.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/books', usersRoutes);
app.get('/', (req,res) => {
    console.log('test');
    res.send('hello from cat');
});




app.listen(PORT, () => console.log('running on server'));