var mongoose = require('mongoose');
var conn = mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;

db.on('error',function() {
	console.log('errror on connection')
});
db.on('open',function(){
	console.log('connection successfull')
});


module.exports.user=mongoose.model('User',new mongoose.Schema({   

    username: String,
    password: String

},{strict: false}));


module.exports.message=mongoose.model('message',new mongoose.Schema({
     user : String,
     text : String,
     type : String
}));
