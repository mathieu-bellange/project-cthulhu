const Places = require('./places');

const ChapelleContemplation = require('./chapelle-contemplation');
const SanatoriumRoxbury = require('./sanatorium-roxbury');
const BureauLigget = require('./bureau-ligget');
const BostonGlobe = require('./boston-globe');
const Library = require('./library');
const CityHall = require('./city-hall');
const PoliceStation = require('./police-station');
const Neighborhood = require('./neighborhood');
const CorbittHouse = require('./house-corbitt');
const WalterCorbitt = require('./walter-corbitt');

const data = {
  'bureau-ligget': BureauLigget,
  sanatorium: SanatoriumRoxbury,
  'boston-globe': BostonGlobe,
  library: Library,
  'city-hall': CityHall,
  'police-station': PoliceStation,
  neighborhood: Neighborhood,
  contemplation: ChapelleContemplation,
  house: CorbittHouse,
  'walter-corbitt': WalterCorbitt
};

export const getData = () => data;
export const getPnjById = id => data[id] ? data[id].pnj : {};
export const getPlaceById = id => {
  if (!Places[id]) return {};
  const basePlace = Places[id].place;
  const pnjs = [];
  if (basePlace.pnjs) {
    basePlace.pnjs.forEach(pnj => {
      if (pnj instanceof Object) pnjs.push(pnj)
      else pnjs.push(getPnjById(pnj))
    });
  }
  return Object.assign({}, basePlace, { pnjs });
};
