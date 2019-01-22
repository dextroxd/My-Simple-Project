const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
//Get the Schema
const Phone  = require('../models/contact');

//Get request
router.get('/phones',function(req,res,next){
Phone.find({}).then(function(phones){
  res.send(phones);
});
// res.send({type:'GET'})
});
//Post request
router.post('/phones',function(req,res,next){
Phone.create(req.body).then(function(phone){
res.send(phone);
}).catch(next);
});
//Update request
router.put('/phones/:id',function(req,res,next){
Phone.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
  Phone.findOne({_id:req.params.id}).then(function(phone){
    res.send(phone);
  });
});
});
//Delete request
router.delete('/phones/:id',function(req,res,next){
Phone.findByIdAndRemove({_id:req.params.id},req.body).then(function(phone){
  res.send(phone);
});
});
module.exports = router;
