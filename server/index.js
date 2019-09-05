const express = require('express')
const app = express();
const path = require ('path');

const scenarios = require('./data/scenarios');

app.use(express.static(path.join(__dirname, './public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/scenarios', (req, res) => {
  res.send(scenarios);
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});
