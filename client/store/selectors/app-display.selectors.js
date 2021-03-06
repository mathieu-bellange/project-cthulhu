const selectAppDisplayState = state => state.appDisplayReducer;

const selectAppDisplayId = (state, id) => selectAppDisplayState(state)[id];

const selectAppDisplayClues = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).clues : [];

const selectAppDisplayWeapons = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).weapons : [];

const selectAppDisplayStuffs = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).stuffs : [];

const selectAppDisplaySpells = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).spells : [];

const selectAppDisplaySkills = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).skills : [];

const selectAppDisplayStats = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).stats : {};

const selectAppDisplayPnjs = (state, id) =>
  selectAppDisplayId(state, id) ? selectAppDisplayId(state, id).pnjs : [];

const selectAppDisplayClue = (state, id, index) =>
  selectAppDisplayClues(state, id).length > index ? selectAppDisplayClues(state, id)[index] : {};

const selectAppDisplayWeapon = (state, id, index) =>
  selectAppDisplayWeapons(state, id).length > index ? selectAppDisplayWeapons(state, id)[index] : {};

const selectAppDisplayStuff = (state, id, index) =>
  selectAppDisplayStuffs(state, id).length > index ? selectAppDisplayStuffs(state, id)[index] : {};

const selectAppDisplaySpell = (state, id, index) =>
  selectAppDisplaySpells(state, id).length > index ? selectAppDisplaySpells(state, id)[index] : {};

const selectAppDisplaySkill = (state, id, index) =>
  selectAppDisplaySkills(state, id).length > index ? selectAppDisplaySkills(state, id)[index] : {};

const selectAppDisplayStat = (state, id, key) =>
  selectAppDisplayStats(state, id)[key] ? selectAppDisplayStats(state, id)[key] : {};

const selectAppDisplayPnj = (state, id, index) =>
  selectAppDisplayPnjs(state, id).length > index ? selectAppDisplayPnjs(state, id)[index] : {};

export const isClueEnlarged = (state, id, index) => selectAppDisplayClue(state, id, index).enlarge;
export const isPnjEnlarged = (state, id, index) => selectAppDisplayPnj(state, id, index).enlarge;
export const isWeaponEnlarged = (state, id, index) => selectAppDisplayWeapon(state, id, index).enlarge;
export const isStuffEnlarged = (state, id, index) => selectAppDisplayStuff(state, id, index).enlarge;
export const isSpellEnlarged = (state, id, index) => selectAppDisplaySpell(state, id, index).enlarge;
export const isSkillEnlarged = (state, id, index) => selectAppDisplaySkill(state, id, index).enlarge;
export const isStatEnlarged = (state, id, key) => selectAppDisplayStat(state, id, key).enlarge;
export const isMenuDisplaying = (state) => selectAppDisplayState(state).isMenuDisplaying;
export const selectScenarioId = (state) => selectAppDisplayState(state).scenarioIdSelected;
