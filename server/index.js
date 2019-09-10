const express = require('express')
const app = express();
const path = require ('path');
const { createServer } = require('http');
const WebSocket = require('ws');

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

const server = createServer(app);
const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
  const id = setInterval(function() {
    ws.send(JSON.stringify(process.memoryUsage()), function() {
      //
      // Ignore errors.
      //
    });
  }, 100);
  console.log('started client interval');

  ws.on('close', () => {
    console.log('stopping client interval');
    clearInterval(id);
  });
});

server.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});
