let store = require('./store');

////// HEADER
const settingsButton = document.querySelector('#settingsButton');
const closeButton = document.querySelector('#closeButton');
const backButton = document.querySelector('#backButton');

settingsButton.addEventListener('click', () => {
  store.isSettings = true;
  update();
})

backButton.addEventListener('click', () => {
  store.isSettings = false;
  update();
})

function updateHeader() {
  store.isSettings
    ? settingsButton.setAttribute('hidden', '')
    : settingsButton.removeAttribute('hidden');

  store.isSettings
    ? backButton.removeAttribute('hidden')
    : backButton.setAttribute('hidden', '');
}

updateHeader();

module.exports = updateHeader;
