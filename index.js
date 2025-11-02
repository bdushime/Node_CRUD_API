const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes-
app.use("/api/products",productRoute);
app.get('/',(req,res)=>{
    res.send("Hello from Node API Beni!");
});


mongoose.connect("mongodb+srv://adminBeni:12345@backenddb.pyy2dzv.mongodb.net/?appName=backendDB")
.then(()=>{
    console.log("Connected to database!");
})
.catch((e)=>{
    console.log("Connection failed!",e);
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});





