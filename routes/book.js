const router = require('express').Router();
const Book = require('../models/Book.js');

//Create a new Book
router.post("/",async(req,res)=>{
    try{
        const newBook = new Book({
            bookId: req.body.bookId,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            publishedDate: req.body.date
        })
        const created_book = await newBook.save();
        res.status(201).json(created_book);
    }catch(err){
        res.status(401).json(err);
    }
})

//Get all the books
router.get("/",async(req,res)=>{
    try{
        const allBook = await Book.find({});
        res.status(200).json(allBook);
    }catch(err){
        res.status(401).json(err);
    }
})

//Get a book by bookId
router.get('/:id',async(req,res)=>{
    try{
        const oneBook = await Book.findOne({bookId:req.params.id});
        res.status(200).json(oneBook);
    }catch(err){
        res.status(402).json(err);
    }
    
})

//Update a book
router.put('/:id',async(req,res) => {
    try{
        const updatedBook = await Book.findOneAndUpdate({bookId:req.params.id},{
            $set:req.body,
        });
        res.status(200).json("Book updated successfully");
    }catch(err){
        res.status(403).json(err);
    }
})

//Delete a book by Id
router.delete("/:id", async(req,res)=>{
    try{
        await Book.findOneAndDelete({bookId: req.params.id});
        res.status(200).json("Book deleted")
    }catch(err){
        res.status(401).json(err);
    }
})

module.exports = router;