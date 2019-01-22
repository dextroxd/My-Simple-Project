const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//set up express
const app = express();
mongoose.connect('mongodb://localhost/phonebook');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
const router = require('./routes/apis.js');

app.use('/dextroxd',router);
app.use(function(err,req,res,next){
  app.get('/',function(req,res){
    res.send({name:'Dextroxd welcomes you'});
  })
});
app.listen(5000,'0.0.0.0',function(){
  console.log('Now listening to requests');
});
