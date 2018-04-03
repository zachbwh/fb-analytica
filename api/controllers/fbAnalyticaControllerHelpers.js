'use strict';

var fs= require('fs'),
    cheerio = require('cheerio'),
    config = require('../../config.js');

exports.genericGetListFromFile = function(path, listIndex, objectName, res) {
  fs.readFile(config.fbDataRoot + path, 'utf8', function(err, data) {
    var $ = cheerio.load(data);
    var contents = $('.contents'),
        dataCheerio = contents.find('ul').eq(listIndex).find('li'),
        data = [],
        i;

    for (i = 0; i < dataCheerio.length; i++) {
      data.push(dataCheerio.eq(i).text());
    }

    res.json({[objectName]: data});
  });
}

exports.parseTimeToUnixTime = function(timeStr) {
  var splitTimeStr = timeStr.split(' ');

  var minutes = parseInt(splitTimeStr[5].split(':')[1]);
  var hours = parseInt(splitTimeStr[5].split(':')[0]);
  var day = parseInt(splitTimeStr[1]);
  var month = parseMonth(splitTimeStr[2]);
  var year = parseInt(splitTimeStr[3]);

  var date = new Date(year, month, day, hours, minutes);
  return date.getTime();
}

var parseMonth = function(str) {
  var months = {
    'january': 0,
    'february': 1,
    'march': 2,
    'april': 3,
    'may': 4,
    'june': 5,
    'july': 6,
    'august': 7,
    'september': 8,
    'october': 9,
    'november': 10,
    'december': 11
  };
  return months[str.toLowerCase()];
}
