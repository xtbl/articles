var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES
// ===========================================================================
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'Welcome!'});
});

// more routes

// REGISTER ROUTES -----------------
// routes are prefixed with /api
app.use('/api', router);

// START SERVER
// ===========================================================================
app.listen(port);
console.log('Server started on port' + port);
