var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.photos);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    photos: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });
});

router.get('/speakers/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) { //only speaker added to url
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.photos);
    }
  });

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    photos: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });
});

module.exports = router;