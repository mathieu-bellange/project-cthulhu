const places = require('./places');
const pnjs = require('./pnjs');

const KillingBirds = {
  id: 'killing-birds',
  title: `Vacances d'été et oiseaux tueurs`,
  desc: [`L’été. Des journées interminables passées à parcourir la campagne
    en quête de quelque chose à faire. Autant de bonheur que d’ennui.
    Mais derrière le doux été suédois, quelque chose s’agite. Tout
    commence avec un oiseau parlant, et rapidement les Enfants sont
    impliqués dans une intrigue machiavélique.`,` Premier scénario de la campagne d'introduction de Tales from the loop`],
  overview: 'killing-birds/scenario.png',
  places: {...places},
  pnjs: {...pnjs}
};

module.exports = KillingBirds;
