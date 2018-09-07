const express=require('express');
const mongoose=require('mongoose');
var request = require('request');
var cors = require('cors');
// body parser is use to process input to node
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer({dest:'uploads/'});
var morgan = require('morgan')
// set up express app

var app = express();
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan('combined'))
//var site_url="http://localhost:4001/uploads/topic/";
// connect to mongodb database
// live server
mongoose.connect('mongodb://13.232.61.198:27017/camwish');
//mongoose.connect('mongodb://localhost:27017/quizking');
mongoose.Promise=global.Promise;
// use body parse  before request type
// for parsing application/json
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));
 app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

app.get('/',function(req,res){
res.sendFile(__dirname + "/index.html");
});
// error handling midlehandling
app.use(function(err,req,res,next){
 //console.log(err);
  // res.status(422).send({error:err.message})
   res.status(422).send({"status":false,"code":404,"message":err.message});
});

// listen for request
app.listen(5000,function(){
 console.log('Listing to Request');
});
app.timeout = 120000;
