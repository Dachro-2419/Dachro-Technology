const express = require("express");
require("dotenv").config();

app=express();
app.use(express.static("public/"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/index.html",(req,res)=>{
    res.redirect("/");
});

app.get("/aboutus.html",(req,res)=>{
    res.sendFile(__dirname+"/aboutus.html");
});

app.get("/asusrog.html",(req,res)=>{
    res.sendFile(__dirname+"/asusrog.html");
});

app.get("/contactus.html",(req,res)=>{
    res.sendFile(__dirname+"/contactus.html");
});

app.get("/realmex7.html",(req,res)=>{
    res.sendFile(__dirname+"/realmex7.html");
});

app.get("/tesla.html",(req,res)=>{
    res.sendFile(__dirname+"/tesla.html");
});



app.listen(process.env.PORT,()=>{
    console.log("server started");
});