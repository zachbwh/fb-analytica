'use strict';

var fs= require('fs'),
    cheerio = require('cheerio'),
    config = require('../../config.js'),
    helper = require('./fbAnalyticaControllerHelpers');

exports.getAdTopics = function(req, res) {
  helper.genericGetListFromFile('/html/ads.htm', 0, 'adTopics', res);
};

exports.getAdsHistory = function(req, res) {
  fs.readFile(config.fbDataRoot + '/html/ads.htm', 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        adsHistoryCheerio = contents.find('ul').eq(1).find('li'),
        adsHistory = [],
        i;

    for (i = 0; i < adsHistoryCheerio.length; i++) {
      //debugger;
      var adHistory = {},
          adHistoryRawText = adsHistoryCheerio.eq(i).text();

      adHistory.time = helper.parseTimeToUnixTime(adsHistoryCheerio.eq(i).find('div.meta').text());
      adHistory.interaction = adHistoryRawText.slice(adHistoryRawText.indexOf("("), adHistoryRawText.indexOf(")") + 1);
      adHistory.ad = adHistoryRawText.slice(0, adHistoryRawText.indexOf(adHistory.interaction) -1);
      adsHistory.push(adHistory);
    }

    res.json({adHistory: adsHistory});
  });
};

exports.getAdContactInfo = function(req, res) {
  helper.genericGetListFromFile('/html/ads.htm', 2, 'adContactInfo', res);
};
