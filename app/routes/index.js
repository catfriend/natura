var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
      <h1>Natura Meetups</h1>
      <p>Natura is a group of nature photographers who like to share their knowlege of the photographic arts.</p>
  `);
});

module.exports = router;