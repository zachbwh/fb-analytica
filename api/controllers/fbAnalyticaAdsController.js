'use strict';

var fs= require('fs'),
    cheerio = require('cheerio'),
    fbDataRoot = '/home/zachbwh/facebook_data';

exports.getAdTopics = function(req, res) {
  fs.readFile(fbDataRoot + '/html/ads.htm', 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        adTopicsCheerio = contents.find('ul').eq(0).find('li'),
        adTopics = [],
        i;

    for (i = 0; i < adTopicsCheerio.length; i++) {
      adTopics.push(adTopicsCheerio.eq(i).text());
    }

    res.json({adTopics: adTopics});
  });
};

exports.getAdsHistory = function(req, res) {
  fs.readFile(fbDataRoot + '/html/ads.htm', 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        adsHistoryCheerio = contents.find('ul').eq(1).find('li'),
        adsHistory = [],
        i;

    for (i = 0; i < adsHistoryCheerio.length; i++) {
      //debugger;
      var adHistory = {},
          adHistoryRawText = adsHistoryCheerio.eq(i).text();
      adHistory.time = adsHistoryCheerio.eq(i).find('div.meta').text();
      adHistory.interaction = adHistoryRawText.slice(adHistoryRawText.indexOf("("), adHistoryRawText.indexOf(")") + 1);
      adHistory.ad = adHistoryRawText.slice(0, adHistoryRawText.indexOf(adHistory.interaction) -1);
      adsHistory.push(adHistory);
    }

    res.json({adHistory: adsHistory});
  });
};

exports.getAdContactInfo = function(req, res) {
  fs.readFile(fbDataRoot + '/html/ads.htm', 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        adTopicsCheerio = contents.find('ul').eq(2).find('li'),
        adTopics = [],
        i;

    for (i = 0; i < adTopicsCheerio.length; i++) {
      adTopics.push(adTopicsCheerio.eq(i).text());
    }

    res.json({adTopics: adTopics});
  });
};
