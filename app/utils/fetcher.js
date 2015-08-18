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
        })
    }

    function formatIntoArticle(rawContentList, sourceType) {
        var redditComic = function (rawItem) {
            var rawItemData = rawItem.data;
            var getImage = function(rawItemPreview){
                return _(rawItemPreview.images).pluck("source").pluck("url").value()[0];
            };
            return {
                title: rawItemData.title,
                description: rawItemData.title || "",
                url: rawItemData.url || "",
                source: rawItemData.author || "",
                thumbnail: rawItemData.thumbnail || "",
                image1: getImage(rawItemData.preview),
                post_hint: rawItemData.post_hint || "",
                categories: ['comics']
            }
        };
        var filterImageItems = function (nonFilteredItem) {
            return (nonFilteredItem.data.hasOwnProperty("post_hint") && nonFilteredItem.data.post_hint === "image");
        }
        if(sourceType === 'reddit') {
            return _(rawContentList.data.children).filter(filterImageItems).map(redditComic).value();
        }
    }

    function getConfig() {
        return config;
}

    return {
        setConfigUrl: setConfigUrl,
        getConfig: getConfig,
        getContentList: getContentList,
        getContentListFromFile: getContentListFromFile,
        formatIntoArticle: formatIntoArticle
    };
};

module.exports = Fetcher;