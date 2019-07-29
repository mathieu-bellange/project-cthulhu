import { ChapelleContemplation } from './chapelle-contemplation';
import { SanatoriumRoxbury } from './sanatorium-roxbury';
import { BureauLigget } from './bureau-ligget';
import { BostonGlobe } from './boston-globe';
import { Library } from './library';
import { CityHall } from './city-hall';
import { PoliceStation } from './police-station';
import { Neighborhood } from './neighborhood';
import { CorbittHouse } from './house-corbitt';
import { GroundFloor } from './ground-floor';
import { FirstFloor } from './first-floor';
import { Cave } from './cave';

export const Places = {
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
}
