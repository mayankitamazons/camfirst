var express = require('express'),
 bodyParser = require('body-parser');
const request=require('request');
const router=express.Router();
const User=require('../Model/usermodel');
const Category=require('../Model/categorymodel');
const Willness=require('../Model/willnessmodel');
const Apperencess=require('../Model/apperencesmodel');
const Hair=require('../Model/hairmodel')
router.post('/login',function(req,res,next){
	console.log(req.body);
   var user_name=req.body.username;
   var pass=req.body.password;
   if(user_name && pass)
   {
	   User.findOne({user_name:user_name,pass:password}).then(function(userdata){
		 if(userdata)
          {
			   res.send({"status":true,"code":200,"message":"Login Successfully"});
		  }
		  else
		  {
			   res.send({"status":false,"code":200,"message":"Invaid Login Detail"});
		  }
		  });
   }
   else
   {
	    res.send({"status":false,"code":200,"message":"User Name and password is required"});
   }
     
	 
 
});  

router.post('/homeapi',function(req,res,next){
	User.find({role_id:2}).then(function(userdata){
		Category.find({}).then(function(cdata){
		    Willness.find({}).then(function(wdata){
				Apperencess.find({}).then(function(adata){
					Hair.find({}).then(function(hdata){
		            var data={
			"model":userdata,
			"category":cdata,
			"wild":wdata,
			"apper":adata,
			"hair":hdata
			};
		res.send({"status":false,"code":200,"message":"Data found","data":data});
					});
			   });
		
			
			});
		
			
		});
		
	});   
});
router.post('/dashboard',function(req,res,next){
 User.find({role_id:2}).then(function(userdata){
		Category.find({}).count().then(function(cdata){
		    Willness.find({}).count().then(function(wdata){
				Apperencess.find({}).count().then(function(adata){
					Hair.find({}).count().then(function(hdata){
						usercount =userdata.length;
		           var data={
        "Category":cdata,
        "model":usercount,
        "wild":wdata,
		"hair":hdata,
        "recent_model":userdata
  };
		res.send({"status":false,"code":200,"message":"Data found","data":data});
					});
			   });
		
			
			});
		
			
		});
		
	});

});
router.post('/categorylist',function(req,res,next){
	Category.find({}).then(function(cdata){
	//console.log(cdata);
		
      res.send({"status":true,"code":200,"message":"Category Data",data:cdata});
	});
  
});  
router.post('/willnesslist',function(req,res,next){
	Willness.find({}).then(function(cdata){
	//console.log(cdata);
		
      res.send({"status":true,"code":200,"message":"Category Data",data:cdata});
	});
  
}); 
router.post('/modelslist',function(req,res,next){
	User.find({role_id:2}).then(function(cdata){
	//console.log(cdata);
		
      res.send({"status":true,"code":200,"message":"Category Data",data:cdata});
	});
  
});   
router.post('/categorylist',function(req,res,next){
	Category.find({}).then(function(cdata){
	//console.log(cdata);
		
      res.send({"status":true,"code":200,"message":"Category Data",data:cdata});
	});
  
});  
router.post('/apprlist',function(req,res,next){
	Apperencess.find({}).then(function(cdata){
	//console.log(cdata);
		
      res.send({"status":true,"code":200,"message":"Category Data",data:cdata});
	});
  
});  
router.post('/addcategory',function(req,res,next){
	  var cdata={
		          _id: Math.random().toString(36).substring(7),
                  category_name:req.body.category_name

              };  
  Category.create(cdata)   
    .then(item => {
     res.send({"status":true,"code":200,"message":"Category Added Successfully"});
    })
    .catch(err => {
		res.send({"status":true,"code":404,"message":"Category Failed"});
     
    });
  
});
router.post('/addapper',function(req,res,next){
	  var cdata={
		          _id: Math.random().toString(36).substring(7),
                  app_name:req.body.app_name

              };  
  Apperencess.create(cdata)   
    .then(item => {
     res.send({"status":true,"code":200,"message":"Apperence Added Successfully"});
    })
    .catch(err => {
		res.send({"status":true,"code":404,"message":"Apperence Failed"});
     
    });
  
});
router.post('/addwillness',function(req,res,next){
	  var cdata={
		          _id: Math.random().toString(36).substring(7),
                  will_name:req.body.will_name

              };  
  Willness.create(cdata)   
    .then(item => {
     res.send({"status":true,"code":200,"message":"Wild Added Successfully"});
    })
    .catch(err => {
		res.send({"status":true,"code":404,"message":"Wild Failed"});
     
    });
  
});
module.exports=router;
