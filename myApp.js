let express = require('express');
let app = express();
let dotEnv = require('dotenv').config();

app.get("/json", (req, res)=>{
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({message: "Hello json"}).toUpperCase();
    }else{res.json({message: "Hello World"});}
})




































 module.exports = app;
