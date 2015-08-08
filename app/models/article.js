var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	description: String,
	url: String,
	image1: String,
	source: String,
	source_icon: String,
	image2: String,
	thumbnail: String,
	summary: String,
	categories: Array
});

module.exports = mongoose.model('Article', ArticleSchema);
