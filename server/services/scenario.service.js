const { of } = require('rxjs');
const { map, tap } = require('rxjs/operators');
const fs = require('fs');
const path = require('path');
const helpDocs = require('../data/scenarios/cretaceous-creature/help-docs');

class ScenarioService {
  add(scenario) {
    return of(scenario).pipe(
      map(({ scenario }) => ({
        ...scenario,
        desc: scenario.description.split('\n'),
        overview: scenario.overview === '' ? 'place-default.png' : `${scenario.id}/${scenario.overview}`,
        pnjs: [],
        places: [],
        helpDocs: []
      })),
      tap(scenario => fs.mkdirSync(path.join('public/images', scenario.id))),
      tap(scenario => fs.mkdirSync(path.join('server/data/scenarios', scenario.id))),
      tap(scenario => fs.mkdirSync(path.join(`server/data/scenarios/${scenario.id}`, 'places'))),
      tap(scenario => fs.mkdirSync(path.join(`server/data/scenarios/${scenario.id}`, 'pnjs'))),
      tap(scenario => fs.mkdirSync(path.join(`server/data/scenarios/${scenario.id}`, 'help-docs'))),
      tap(scenario => fs.writeFileSync(`server/data/scenarios/${scenario.id}/scenario.json`, JSON.stringify(scenario), 'utf-8'))
    );
  }

  getAll() {
    return of(fs.readdirSync('server/data/scenarios', { withFileTypes: true })).pipe(
      map(dirs => dirs.filter(dir => dir.isDirectory())),
      map(dirs => dirs.reduce((acc, v) => {
        const scenarioJson = JSON.parse(fs.readFileSync(`server/data/scenarios/${v.name}/scenario.json`, 'utf8'));
        let places = {};
        fs.readdirSync(`server/data/scenarios/${v.name}/places`).forEach(filename => {
          if (filename.match(/^[a-z-]*.json$/)) {
            const place = JSON.parse(fs.readFileSync(`server/data/scenarios/${v.name}/places/${filename}`, 'utf8'));
            places = { ...places, [place.id]: place }
          }
        });
        let pnjs = {};
        fs.readdirSync(`server/data/scenarios/${v.name}/pnjs`).forEach(filename => {
          if (filename.match(/^[a-z-]*.json$/)) {
            const pnj = JSON.parse(fs.readFileSync(`server/data/scenarios/${v.name}/pnjs/${filename}`, 'utf8'));
            pnjs = { ...pnjs, [pnj.id]: pnj }
          }
        });
        return {...acc, [v.name]: {...scenarioJson, pnjs, places, helpDocs } };
      }, {})),
      tap(console.log),
    );
  }
}

module.exports = ScenarioService;
