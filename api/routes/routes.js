module.exports = function(app) {

  // ads Routes
  var fbAnalyticaAds = require('../controllers/fbAnalyticaAdsController');

  app.route('/ads/topics')
    .get(fbAnalyticaAds.getAdTopics)

  app.route('/ads/history')
    .get(fbAnalyticaAds.getAdsHistory)

  app.route('/ads/contact-info')
    .get(fbAnalyticaAds.getAdContactInfo)
  // END OF ads Routes

  /*app.route('/apps')
    .get(fbAnalytica.getApps)

  app.route('/contact-info')
    .get(fbAnalytica.getContacts)

  app.route('/events')
    .get(fbAnalytica.getEvents)

  // friends Routes
  app.route('/friends/current')
    .get(fbAnalytica.getCurrentFriends)

  app.route('/friends/sent-requests')
    .get(fbAnalytica.getSentFriendRequests)

  app.route('/friends/received-requests')
    .get(fbAnalytica.getReceivedFriendRequests)

  app.route('/friends/declined-requests')
    .get(fbAnalytica.getDeclinedRequests)

  app.route('/friends/removed-friends')
    .get(fbAnalytica.getRemovedFriends)

  app.route('/friends/followers')
    .get(fbAnalytica.getFollowers)

  app.route('/friends/followees')
    .get(fbAnalytica.getFollowees)

  app.route('/friends/peer-group')
    .get(fbAnalytica.getFriendPeerGroup)
  // END OF friends Routes

  // messages Routes
  app.route('/messages/list-conversations')
    .get(fbAnalytica.getConversationList)
  // END OF messages Routes

  // photos Routes
  app.route('/photos/albums')
    .get(fbAnalytica.listPhotoAlbums)
  // END OF photos Routes

  app.route('/pokes')
    .get(fbAnalytica.getPokes)

  // security Routes
  app.route('/security/acc-status-changes')
    .get(fbAnalytica.getAccountStatusChanges)

  app.route('/security/active-sessions')
    .get(fbAnalytica.getActiveSessions)

  app.route('/security/recognized-machines')
    .get(fbAnalytica.getRecognizedMachines)

  app.route('/security/logins-logouts')
    .get(fbAnalytica.getLoginsAndLogouts)

  app.route('/security/cookies')
    .get(fbAnalytica.getLoginCookies)

  app.route('/security/ip-addresses')
    .get(fbAnalytica.getIPAddresses)

  app.route('/security/estimated-locations')
    .get(fbAnalytica.getEstimatedLocations)

  app.route('/security/auth-cookie-info')
    .get(fbAnalytica.getAuthCookieInfo)

  app.route('/security/physical-tokens')
    .get(fbAnalytica.getPhysicalTokens)

  app.route('/security/admin-records')
    .get(fbAnalytica.getAdminRecords)
  // END OF security Routes

  app.route('/timeline')
    .get(fbAnalytica.getTimelinePosts)

  // videos Routes
  app.route('/videos')
    .get(fbAnalytica.getVideos)
  // END OF vidoes Routes
  */
};
