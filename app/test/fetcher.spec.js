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
    it("gets content list");
    it("gets content list from file");
    it("returns a formatted list of articles", function () {
        //TODO: add this test and mock-fs file reader test
        // to populate the db with the formatted list from the file
        //but first create the formatter, thats the priority
        //important field in reddit: post_hint: "image"
        //console.log(rawContentMock);
        console.log(formattedList);
      //  formattedList[0].title.should.equal("[Meta] /r/Comics is looking for moderators, apply within");
    });


});

