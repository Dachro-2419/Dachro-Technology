const express = require("express");
const ejs = require("ejs");
require("dotenv").config();

app=express();
app.use(express.static("public/"));
app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        display: "display:flex"
    });
});

app.get("/index.html",(req,res)=>{
    res.redirect("/",);
});

app.get("/aboutus.html",(req,res)=>{
    res.render("aboutus.ejs");
});

app.get("/asusrog.html",(req,res)=>{
    res.render("asusrog.ejs");
});

app.get("/contactus.html",(req,res)=>{
    res.render("contactus.ejs");
});

app.get("/realmex7.html",(req,res)=>{
    res.render("realmex7.ejs");
});

app.get("/RealmeX3.html",(req,res)=>{
    res.render("RealmeX3.ejs");
});



app.listen(process.env.PORT,()=>{
    console.log("server started");
});
