var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('./app/models/article');
var Fetcher = require('./app/utils/fetcher');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://test:test@dbh74.mongolab.com:27747/articles');


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
		article.title = req.body.title;
		article.description = req.body.title;
		article.url = req.body.url;
		article.source = req.body.source;
		article.thumbnail = req.body.thumbnail;
		article.image1 = req.body.image1;
		article.post_hint = req.body.post_hint;
		article.categories = req.body.categories;
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

router.route('/articles/:article_id')
	.get(function(req, res) {
		Article.findById(req.params.article_id, function(err, article){
			if(err)
				res.send(err);
			res.json(article);
		});
	})
	.put(function(req, res) {
		Article.findById(req.params.article_id, function(err, article) {
			if(err)
				res.send(err);
			article.title = req.body.title;
			article.save(function(err) {
				if(err)
					res.send(err);
				res.json({message: 'Article updated'});
			});
		});
	})
	.delete(function(req, res) {
		Article.remove({
			_id: req.params.article_id
		}, function(err, article) {
			if(err)
				res.send(err);
			res.json({message: 'Successfully deleted'});
		});
	});		
// REGISTER ROUTES -----------------
// routes are prefixed with /api
app.use('/api', router);

// START SERVER
// ===========================================================================
app.listen(port);
console.log('Server started on port' + port);

var fetcher = new Fetcher();
fetcher.getContentListFromFile();
