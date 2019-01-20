const express = require('express');
const router = express.Router();
const spotifyService = require('../../spotify/spotifyService');

router.get('/search/track/:name', async function (req, res) {
  let data = await spotifyService.searchTrack(req.params.name);
  console.log("Controller data: " + data);
  res.setHeader("Content-Type", "application/json");
  console.log("Found tracks: ", JSON.stringify(data));
  res.status(data.statusCode).send(data.body);
})

router.get('/track/:id', async function (req, res) {
  const data = await spotifyService.getTrack(req.params.id);
  res.setHeader("Content-Type", "application/json");
  console.log("Track data: ", JSON.stringify(data));
  res.status(data.statusCode).send(data.body);
})

router.get('/track/:id/features', async function (req, res) {
  const data = await spotifyService.getTrackAudioFeatures(req.params.id);
  res.setHeader("Content-Type", "application/json");
  console.log("Track features: ", JSON.stringify(data));
  res.status(data.statusCode).send(data.body); 
  //res.send(data);
})

module.exports = router;