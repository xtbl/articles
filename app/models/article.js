var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	name : String
});

module.exports = mongoose.model('Article', ArticleSchema);
