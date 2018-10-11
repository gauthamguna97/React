
var express = require('express');
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
//var ip = require('ip');
var path = require('path')
var mongoose = require('./utils/mongoutil.js');

var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
        extended: true
}));

app.post('/login',function(req,res) {

	var user = req.body

	console.log(user)
	console.log(user.username)

	mongoose.user.findOne(user,function(err,doc){
            if(err){
                res.json(err); 
            }
            if(doc == null){
                mongoose.user.create(user,function(err,doc){
                    if(err) res.json(err);
                    else{
                        //res.send("success");
                    }
                });
            }else{
                console.log("User already found");
            }
	})

	mongoose.message.find({user : user.username},function(err,data){
		if(err){
			res.json(err);
		}
		if(!data){
			res.send("no data found");
		}else{
			console.log(data);
			res.send(JSON.stringify(data));
		}
	});

});
app.post('/message',function(req,res) {
	
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");
	var message = req.body

	console.log(message)

	mongoose.message.create(message,function(err,doc){
		if(err) res.json(err);
		else{
			res.send('messages added');
		}
	});

});	


http.listen(5000,function(){
	console.log('listening at port 5000')
})


