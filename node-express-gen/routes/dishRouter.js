var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishRouter = express.Router();
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/plein'});
	next();
})
.get(function(req,res,next){
		 res.end('Will send all the dishes to you!');
		})
.post(function(req,res,next){
		 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
		})
.delete(function(req,res,next){
		 res.end('Deleting all dishes');
		});

dishRouter.route('/:dishId')
.get(function(req,res,next){
		 res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
		})
.put(function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})
.delete( function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;