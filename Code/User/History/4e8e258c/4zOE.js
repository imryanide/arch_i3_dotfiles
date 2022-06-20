const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.send({message:"Hello World"});

});

app.listen(3333,()=> {
    console.log('Application listening on port 3333!');
});