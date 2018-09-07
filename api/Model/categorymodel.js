var mongoose=require('mongoose');
var schema=mongoose.Schema;
var ObjectIdSchema = schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
// create user default Schema
var Categoryschema=new schema({
	_id:{
    type:String
	},
  category_name:{
	  type:String
  }
});
var Category=mongoose.model('category',Categoryschema);
module.exports=Category;