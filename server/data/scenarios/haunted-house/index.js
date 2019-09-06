const places = require('./places');
const pnjs = require('./pnjs');

const HauntedHouse = {
  id: 'haunted-house',
  title: 'La maison Hantée',
  overview: '/images/place-default.png',
  places: {...places},
  pnjs: {...pnjs}
};

module.exports = HauntedHouse;
