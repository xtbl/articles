var should = require("should");
var Article = require("../models/article");

describe("User", function () {
    var article = {};

    before(function () {
        article = new Article({
            title: "Article Title",
            description: "Description",
            url: "http://test.com",
            image1: "http://test.com/image.jpg",
            source: "http://test.com",
            source_icon: "http://test.com/image.jpg",
            image2: "http://test.com/image.jpg",
            thumbnail: "http://test.com/image.jpg",
            summary: "Article summary",
            categories: ["tag1", "tag2"]
        });
    });

    it("has title", function () {
        article.title.should.equal("Article Title");
    });
    it("has description", function () {
        article.description.should.equal("Description");
    });
    it("has url", function () {
        article.url.should.equal("http://test.com");
    });
    it("has image1", function () {
        article.image1.should.equal("http://test.com/image.jpg");
    });
    it("has source", function () {
        article.source.should.equal("http://test.com");
    });
    it("has sourceicon", function () {
        article.source_icon.should.equal("http://test.com/image.jpg");
    });
    it("has image2", function () {
        article.image2.should.equal("http://test.com/image.jpg");
    });
    it("has thumbnail", function () {
        article.thumbnail.should.equal("http://test.com/image.jpg");
    });
    it("has summary", function () {
        article.summary.should.equal("Article summary");
    });
    it("has tags", function () {
        article.categories.should.containDeep(["tag1", "tag2"]);
    });

});
