var Fetcher = function () {
   var contentList = [];
   var config = {
       url: ""
   };

    function setConfigUrl(url) {
        config.url = url;
    }

    function getContentList() {
        return contentList;
    }

    function getConfig() {
        return config;
    }
    return {
        setConfigUrl: setConfigUrl,
        getConfig: getConfig,
        getContentList: getContentList
    };
};

module.exports = Fetcher;