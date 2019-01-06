const express = require('express')
const app = express();
const path = require('path');
const pages = require('./controllers/pageController');
const spotify = require('./controllers/api/spotifyController');
const port = process.env.PORT || 8000;

/**
 * View config
 */
app.use(express.static(path.join(__dirname, '..', 'client', 'views')));
app.use('/favicon.ico', express.static(path.join(__dirname, '..','client', 'assets', 'favicon.ico')));
app.use('/', express.static(path.join(__dirname, '..','client', 'dist')));
/**
 * Routing
 */

app.use('/', pages);
app.use('/api', spotify);

app.listen(port, () => {
  console.log(`Miusik app listening on port ${port}!`);
});

