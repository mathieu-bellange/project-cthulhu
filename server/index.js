const express = require('express')
const app = express();
const path = require ('path');

const places = require('./data/places');

app.use(express.static(path.join(__dirname, './public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/places', (req, res) => {
  res.send(places);
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});
