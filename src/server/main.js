const express = require('express')
const app = express();
const path = require('path');
const pages = require('./controllers/pageController');

app.use(express.static(path.join(__dirname, '..', 'client', 'views')));

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

app.use('/', pages);