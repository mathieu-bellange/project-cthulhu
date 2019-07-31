const ChapelleContemplation = require('./chapelle-contemplation');
const SanatoriumRoxbury = require('./sanatorium-roxbury');
const BureauLigget = require('./bureau-ligget');
const BostonGlobe = require('./boston-globe');
const Library = require('./library');
const CityHall = require('./city-hall');
const PoliceStation = require('./police-station');
const Neighborhood = require('./neighborhood');
const CorbittHouse = require('./house-corbitt');
const GroundFloor = require('./ground-floor');
const FirstFloor = require('./first-floor');
const Cave = require('./cave');

const Places = {
  'bureau-ligget': BureauLigget,
  sanatorium: SanatoriumRoxbury,
  'boston-globe': BostonGlobe,
  library: Library,
  'city-hall': CityHall,
  'police-station': PoliceStation,
  neighborhood: Neighborhood,
  contemplation: ChapelleContemplation,
  house: CorbittHouse,
  'ground-floor': GroundFloor,
  'first-floor': FirstFloor,
  cave: Cave
};

module.exports = Places;
