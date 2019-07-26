import { ChapelleContemplation } from './chapelle-contemplation';
import { WalterCorbitt } from './walter-corbitt';

const data = {
  contemplation: ChapelleContemplation,
  'walter-corbitt': WalterCorbitt,
  test1: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test2: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test3: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test4: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test5: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test6: {
    url: '',
    place: {overview: "place-default.png"}
  },
  test7: {
    url: '',
    place: {overview: "place-default.png"}
  }
};

export const getData = () => data;
export const getPnjById = id => data[id] ? data[id].pnj : {};
export const getPlaceById = id => {
  if (!data[id]) return {};
  const basePlace = data[id].place;
  const pnjs = [];
  basePlace.pnjs.forEach(pnj => {
    if (pnj instanceof Object) pnjs.push(pnj)
    else pnjs.push(getPnjById(pnj))
  });
  return Object.assign({}, basePlace, { pnjs });
};
export const getNestedPlaceById = (idPlace, idNestedPlace) => getPlaceById(idPlace).insidePlace ? getPlaceById(idPlace).insidePlace[idNestedPlace].place : {};
