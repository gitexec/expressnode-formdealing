var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('new-user');
})

app.get('/create-new-user', function(req, res){
	res.send(req.query);
});

app.listen(3000, function(){
	console.log("listening port 3000")
});
