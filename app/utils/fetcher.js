var fs = require('fs');
var _ = require('lodash');

var Fetcher = function () {
    var contentList = [];
    var contentListFromFile = [];

    var config = {
        url: ""
    };

    function setConfigUrl(url) {
        config.url = url;
    }

    function getContentList() {
        return contentList;
    }

    function getContentListFromFile() {
        fs.readFile('app/utils/comics.json', 'utf8', function (err, data) {
            if(err) throw err;
            contentListFromFile = JSON.parse(data);
            console.log(contentListFromFile);

            //TODO: format content list
        })
    }

    function getConfig() {
        return config;
    }

    return {
        setConfigUrl: setConfigUrl,
        getConfig: getConfig,
        getContentList: getContentList,
        getContentListFromFile: getContentListFromFile
    };
};

module.exports = Fetcher;