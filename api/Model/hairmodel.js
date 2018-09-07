var mongoose=require('mongoose');
var schema=mongoose.Schema;
var ObjectIdSchema = schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
// create user default Schema
var Hairschema=new schema({
	_id:{
    type:Number
	},
  hair_name:{
	  type:String
  }
});
var Hair=mongoose.model('hair',Hairschema);
module.exports=Hair;