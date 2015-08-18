var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	description: String,
	url: String,
	image1: String,
	source: String,
	image2: String,
	thumbnail: String,
	post_hint: String,
	categories: Array
});

module.exports = mongoose.model('Article', ArticleSchema);
