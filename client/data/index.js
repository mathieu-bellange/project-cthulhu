import { Places } from './places';

import { ChapelleContemplation } from './chapelle-contemplation';
import { SanatoriumRoxbury } from './sanatorium-roxbury';
import { BureauLigget } from './bureau-ligget';
import { BostonGlobe } from './boston-globe';
import { Library } from './library';
import { CityHall } from './city-hall';
import { PoliceStation } from './police-station';
import { Neighborhood } from './neighborhood';
import { CorbittHouse } from './house-corbitt';
import { WalterCorbitt } from './walter-corbitt';

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
