let store = require('./store');

////// VIEWS
const tunerViewContainer = document.querySelector('#tunerViewContainer');
const settingsViewContainer = document.querySelector('#settingsViewContainer');

function updateView() {
  store.isSettings
    ? tunerViewContainer.setAttribute('hidden', '')
    : tunerViewContainer.removeAttribute('hidden');

  store.isSettings
    ? settingsViewContainer.removeAttribute('hidden')
    : settingsViewContainer.setAttribute('hidden', '');
}

updateView();

module.exports = updateView;
