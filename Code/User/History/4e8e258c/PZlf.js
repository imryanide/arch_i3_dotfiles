const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/',(req,res) => {
    res.send({message:"Hello World"});

});