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

exports.getAdHistory = function(req, res) {
  fs.readFile(fbDataRoot + '/html/ads.htm', 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        adTopicsCheerio = contents.find('ul').eq(1).find('li'),
        adTopics = [],
        i;

    for (i = 0; i < adTopicsCheerio.length; i++) {
      adTopics.push(adTopicsCheerio.eq(i).text());
    }

    res.json({adTopics: adTopics});
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
