const express = require('express')
const path = require ('path');
const { createServer } = require('http');
const WebSocket = require('ws');
const { add, del, actionOnSharedDocs$, sharedDocs$ } = require('./shared-doc');
const scenarios = require('./data/scenarios');
const { ScenarioService } = require('./create');
const scenarioService = new ScenarioService();

const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/scenarios', (req, res) => {
  res.send(scenarios);
});

app.post('/api/scenarios', (req, res) => {
  scenarioService.add(req.body).subscribe(scenario => {
    console.log(scenario);
    res.send(scenario);
  });
});

app.get('/api/music/:scenarioId/:name', (req, res) => {
  res.sendFile(path.join(__dirname, './data/scenarios', `./${req.params.scenarioId}`, './music', `./${req.params.name}`));
});

app.post('/api/help-document', (req, res) => {
  actionOnSharedDocs$.next({ sharedDoc: req.body.sharedDoc, func: add});
  res.send({ scenarioId: req.body.scenarioId, sharedDoc: { ...req.body.sharedDoc, shared: true  } });
});

app.delete('/api/help-document', (req, res) => {
  actionOnSharedDocs$.next({ sharedDoc: req.body.sharedDoc, func: del});
  res.send({ scenarioId: req.body.scenarioId, sharedDoc: { ...req.body.sharedDoc, shared: false  } });
});

const server = createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  const subscriber = sharedDocs$.subscribe((result) => ws.send(JSON.stringify(result)));

  ws.on('close', () => {
    subscriber.unsubscribe();
  });
});

server.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});
