const express = require('express');
const router = express.Router();
const spotifyService = require('../../spotify/spotifyService');

router.get('/search/track/:name', async function (req, res) {
  let data = await spotifyService.searchTrack(req.params.name);
  console.log("Controller data: " + data);
  res.send(data);
})

router.get('/track/:id', async function (req, res) {
  let data = await spotifyService.getTrack(req.params.id);
  console.log("Controller data: " + data);
  res.send(data);
})

router.get('/track/:id/features', async function (req, res) {
  let data = await spotifyService.getTrackAudioFeatures(req.params.id);
  console.log("Controller data: " + data);
  res.send(data);
})

module.exports = router;