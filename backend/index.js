const port = 8000;
const express=require("express");
const app =express();
const mongoose= require("mongoose");
const jwt= require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());

//Database connection with mongodb
mongoose.connect("mongodb+srv://nomankarki56:S-t-f-11@cluster0.sowragp.mongodb.net/e-commerce");

//API Creation

app.get('/',()=>(req,res)=>{
  res.send("Express App is Running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " + port)
    }
    else{
        console.log("Error: ="+ error);
    }
})