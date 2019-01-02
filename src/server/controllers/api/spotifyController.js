const express = require('express');
const router = express.Router();
const spotifyService = require('../../spotify/spotifyService');

router.get('/search/artist/:name', async function (req, res) {
  let data = await spotifyService.searchArtist(req.params.name);
  console.log("Controller data: " + data);
  res.send(data);
})

router.get('/artist/:id', async function (req, res) {
  let data = await spotifyService.getArtist(req.params.id);
  console.log("Controller data: " + data);
  res.send(data);
})

module.exports = router;