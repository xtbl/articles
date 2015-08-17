var should = require("should");
var mockFs = require("mock-fs");
var Fetcher = require("../utils/fetcher");
var rawContentMock = require("../test/rawContentMockRedditComics.json");

describe("Fetcher", function () {
   var fetcher = {};
    var formattedList = [];
   before(function () {
       fetcher = new Fetcher();
       fetcher.setConfigUrl("http://google.com");
       formattedList = fetcher.formatIntoArticle(rawContentMock, "reddit");
   })

    it("has fetch url", function () {
       fetcher.getConfig().url.should.equal("http://google.com");
    });
    it("returns a formatted list of articles", function () {
        // TODO: to populate the db with the formatted list from the file
        typeof formattedList[0].title.should.equal('Fly You Fools [OC]');
        typeof formattedList[0].description.should.equal('Fly You Fools [OC]');
        typeof formattedList[0].url.should.equal("http://i.imgur.com/9qeyobk.png");
        typeof formattedList[0].source.should.equal('goneintorapture');
        typeof formattedList[0].thumbnail.should.equal('http://a.thumbs.redditmedia.com/uJKO8cUDamN3SfNERu7ghdg1gxzblBJ40kDnDK5rpR8.jpg');
        typeof formattedList[0].image1.should.equal("https://i.redditmedia.com/ca0e-geWSb2zOq1q4PavFXsOHvVlHEHCBTy9iyAG3BU.jpg?s=44a0f9bf4bba87dff496f300d0e6697d");
        typeof formattedList[0].post_hint.should.equal('image');
    });

});

