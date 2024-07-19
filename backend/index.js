const express = require('express');
const { PORT, mongoDBURL } = require('./config');
const mongoose = require('mongoose');
const { Book } = require('./models/bookModel');
const router = require('./routes/booksRoute');
const cors = require('cors');

const app = express();

// use built -in middleware to parse JSON
app.use(express.json());

//middle ware to log the requet body
// app.use((req,res,next) => {
//     console.log(`Request body : `, req.body);
//     next();
// })


// CORS 
app.use(cors())


// app.use(
//     cors({
//         origin : 'http://localhost:3000',
//         methods : ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders : ['Content-Type']
//     })
// )


app.use('/api', router);

app.get('/', (request, response) => {
    console.log(request);
    response.status(200).send(`Welcome`);
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });





    