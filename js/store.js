const { updateLocalStorage, getLocalStorage } = require('./localStorage');

let store = {
  isSettings: false,

  set theme(value) {
    this._theme = value;
    updateLocalStorage('theme', this._theme);
  },
  get theme() {
    return this._theme;
  },
  set instrument(value) {
    this._instrument = value
    updateLocalStorage('instrument', this._instrument);

  },
  get instrument() {
    return this._instrument;
  },
  set speed(value) {
    this._speed = value;
    updateLocalStorage('speed', this._speed);
  },
  get speed() {
    return this._speed;
  }
};

function setInitialStore() {
  store.theme =  getLocalStorage('theme') || 'Neumorph';
  store.instrument = getLocalStorage('instrument') || 'guitar'
  store.speed = getLocalStorage('speed') || 6000;
}

setInitialStore();

module.exports = store;
