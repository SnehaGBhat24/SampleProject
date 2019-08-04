var express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var https = require('https');
var fs = require('fs');


var app = express();
var port = 3000;
const route = require('./Routes/route')

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/myDB');
mongoose.connection.on('connected', ()=>{
    console.log('Connected to DB')
})

app.use(cors());

app.use(bodyparser());

app.use ('/api', route);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../UI/src/loginPage.html'))
})

app.listen(port, ()=> {
    console.log('Serve started on port' + port)
})

module.exports = app;