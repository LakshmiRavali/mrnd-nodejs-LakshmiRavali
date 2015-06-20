var express = require('express');
var router = express.Router();
var index=0;
var a= [];
var messages=[];
/* GET contacts */
router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
	res.send(a[req.params.id]);
	
});

router.post('/', function(req, res, next) {
	console.log("**********",req.body.message,"*****************");
	console.log(req.body);
	a.push(req.body);
	index++;
	console.log(a);
	res.send(''+(index-1));
});

router.put('/:id', function(req, res, next) {
	console.log("**********",req.url,"*****************");
	if(req.body.firstName!=undefined)
		a[index-1].firstName=req.body.firstName;
	if(req.body.lastName!=undefined)
		a[index-1].lastName=req.body.lastName;
	if(req.body.phone!=undefined)
		a[index-1].phone=req.body.phone;
	res.send(a[index-1]);
});

router.post('/messages', function(req, res, next) {
	a[req.body.id].message=req.body.message;
	res.send(''+req.body.id);
});

module.exports = router;
