const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
require("dotenv").config();


app=express();
app.use(express.static("public/"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const userSchema = new mongoose.Schema(
    {
        email : String,
    }
)
const User = mongoose.model("User", userSchema);

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        display: "display:flex"
    });
});

app.get("/index.html",(req,res)=>{
    res.render("index.ejs",{
        display: "display:none"
    });
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

app.post("/upload",(req,res)=>{
    const newUser = User({
        email : req.body.email
    })
    newUser.save()
    res.redirect("/index.html")
})


app.listen(process.env.PORT,()=>{
    console.log("server started");
});
