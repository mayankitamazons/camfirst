var mongoose=require('mongoose');
var schema=mongoose.Schema;
var ObjectIdSchema = schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
// create user default Schema
var Apperenceschema=new schema({
	_id:{
    type:String
	},
  app_name:{
	  type:String
  }
}); 
var apperencess=mongoose.model('apperencess',Apperenceschema);
module.exports=apperencess;