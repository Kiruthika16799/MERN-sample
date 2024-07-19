const express = require('express');
const { Book } = require('../models/bookModel.js');

const router = express.Router();

// Refactor node js with express router


// Save new book with mongoose
router.post('/books', async(request, response) => {
    try {
        const { title, author, publishYear } = request.body;
        if(!title || !author || !publishYear){
            return response.status(400).send({message : ` Send all required fields : title, author, publishyear`});
        }
        const newBook = { title, author, publishYear };
        const book = await Book.create(newBook);
        return response.status(200).send(book);

    } catch(error){
        console.log(error.mongoose);
        response.status(500).send({mesaage : error.mesaage})
    }
})


// Route for get all books from database 
router.get('/books', async(request, response) => {
    try{
        const books = await Book.find({})
        return response.status(200).json({
            count : books.length,
            data : books
        })

    } catch(error){
        console.log(error);
        return response.status(500).send({message : error.mesaage});
    }

})

// Route for get one books from database  by ID
router.get('/book/:id', async(request, response) => {
    try{
        console.log(request.params);
        const { id } = request.params;

        const book = await Book.findById(id);
        if(!book){
            return response.status(200).json({
                mesaage : "Book not found"
            })
        }
        return response.status(200).send(book)

    } catch(error){
        console.log(error);
        return response.status(500).send({message : error.mesaage});
    }

})

// Route for update a book
router.put('/books/:id', async(request, response) => {
    try {
        const { title, author, publishYear } = request.body;
        if(!title || !author || !publishYear){
            return response.status(400).send({
                message : 'send all required fields : title, suthor, pulishYear'
            });
        } 

        const { id } = request.params;
        const updateBook = await Book.findByIdAndUpdate(id, { title, author, publishYear });
        if(!updateBook){
            return response.status(200).json({
                mesaage : "Book not found"
            })
        }
        return response.status(200).send({
            mesaage : "Book updated successfully"
        })
    } catch (error) {
        console.log(error);
        return response.status(500).send({message : error.mesaage});
    }
})

// Route for delete a book
router.delete('/books/:id', async(request, response) => {
    try{
        const { id } = request.params;

        const deleteBook = await Book.findByIdAndDelete(id);

        if(!deleteBook){
            return response.status(200).json({
                mesaage : "Book not found"
            })
        }
        return response.status(200).send({
            mesaage : "Book deleted successfully"
        })


    } catch(error){
        console.log(error);
        return response.status(500).send({message : error.mesaage});
    }
})

module.exports = router;