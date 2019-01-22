const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
  name:{
    type:String,
    required:[true,"Name field is required"]
  },
  phone:Number
});
const Phone = mongoose.model('phone',Contact);
module.exports = Phone;
