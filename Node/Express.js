var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/' , function (req, res){
	console.log("Got a GET request for the homepage");
res.send('Hello');
})

app.post('/' , function (req, res){
	console.log("Got a POST request for the homepage");
	res.send('Hello GET');
})

app.delete('/del_user' , function (req, res){
	console.log("Got a DELETE request for /del_user");
	res.send('Hello delete');
})

app.get('/list_user' , function(req,res){
	console.log("Got a GET request for the list_user");
	res.send('Page Listing');
})

app.get('/ab*cd' , function(req,res){
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
})

var server = app.listen(8081, function (){
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host , port)
})