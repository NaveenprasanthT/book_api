const express = require ('express')
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const app = express()
dotenv.config();

//import routes
const useAuth = require("./routes/auth.js");
const useBooks = require("./routes/book.js");

//middleware
app.use(express.json())

//Database connection
mongoose.connect(process.env.MONGO_DB,)
.then(()=>{
    console.log("Database connection established")
})
.catch(err=>{console.log(err)});

//api path
app.use('/api/auth',useAuth);
app.use('/api/books',useBooks);

const PORT = 8000
app.listen(PORT,() => {
    console.log(`Server is running in port ${PORT}`)
})