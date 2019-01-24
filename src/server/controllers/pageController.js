const express = require('express');
const router = express.Router();
const path = require('path');

// Home page route.
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'..', '..', 'client', 'views', 'index.html'));
});

router.get('/track/*', function(req, res) {
  res.sendFile(path.join(__dirname,'..', '..', 'client', 'views', 'index.html'));
});


module.exports = router;