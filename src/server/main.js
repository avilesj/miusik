const express = require('express')
const app = express();
const path = require('path');
const pages = require('./controllers/pageController');
const spotify = require('./controllers/api/spotifyController');


/**
 * View config
 */
app.use(express.static(path.join(__dirname, '..', 'client', 'views')));
app.use('/favicon.ico', express.static(path.join(__dirname, '..','client', 'assets', 'favicon.ico')));

/**
 * Routing
 */

app.use('/', pages);
app.use('/api', spotify);

app.listen(8000, () => {
  console.log('Miusik app listening on port 8000!')
});

