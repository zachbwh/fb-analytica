'use strict';

var fs= require('fs'),
    cheerio = require('cheerio'),
    config = require('../../config.js'),
    helper = require('./fbAnalyticaControllerHelpers');

exports.getInstalledApps = function(req, res) {
  helper.genericGetListFromFile('/html/apps.htm', 0, 'installedApps', res);
};
