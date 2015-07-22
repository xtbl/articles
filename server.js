var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('./app/models/article');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://test:testxxxxx@dbh74.mongolab.com:27747/articles');


var port = process.env.PORT || 8080;

// ROUTES
// ===========================================================================
var router = express.Router();

// middleware for all requests
router.use(function(req, res, next) {
	console.log('Something is happening');
	next();
});

router.get('/', function(req, res) {
	res.json({message: 'Welcome!'});
});

// more routes

router.route('/articles')
	.post(function(req, res) {
		var article = new Article();
		article.name = req.body.name;
		article.save(function(err) {
			if(err) 
				res.send(err);
		
			res.json({message: 'Article created'});
		});
	})
	.get(function(req, res) {
		Article.find(function(err, articles) {
			if(err)
				res.send(err);

			res.json(articles);
		});
	});

// REGISTER ROUTES -----------------
// routes are prefixed with /api
app.use('/api', router);

// START SERVER
// ===========================================================================
app.listen(port);
console.log('Server started on port' + port);
