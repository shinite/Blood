var mongoose=require("mongoose");
var Schema =mongoose.Schema;

var BloodBank= new Schema({

  Name:String,
  BloodGroup:String,
  Hospital:String,
  UnitsofBlood:Number

});
module.exports=mongoose.model('BloodBank',BloodBank);
