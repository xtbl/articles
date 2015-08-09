var should = require("should");
var Fetcher = require("../utils/fetcher");
describe("Fetcher", function () {
   var fetcher = {};

   before(function () {
      fetcher = new Fetcher();
       fetcher.setConfigUrl("http://google.com")
   })

    it("has fetch url", function () {
       fetcher.getConfig().url.should.equal("http://google.com");
    });
    it("gets content list");
});

