require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.app_PORT;

app.get('/', function(req, res){
    res.send('Default Rote');
});

app.listen (PORT, function(){
    console.log(`server is running on port ${PORT}`);
});
