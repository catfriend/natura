var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
  	<link rel="stylesheet" type="text/css" href="css/style.css">
      <h1>Natura Meetups</h1>
      <img src="/images/misc/hero_2.jpg" alt="background" style="height: 300px, width: 1000px;">
      <p>Natura is a group of nature photographers who like to share their knowlege of the photographic arts.</p>
      <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;