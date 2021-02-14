let store = require('./store');

// Get elements
const tunerViewContainer = document.querySelector('#tunerViewContainer');
const settingsViewContainer = document.querySelector('#settingsViewContainer');

/**
 * Show correct view (either 'tuner' or 'settings' view)
 */
function updateView() {
  // Set tuner view state
  store.isSettings
    ? tunerViewContainer.setAttribute('hidden', '')
    : tunerViewContainer.removeAttribute('hidden');

  // set settings view state
  store.isSettings
    ? settingsViewContainer.removeAttribute('hidden')
    : settingsViewContainer.setAttribute('hidden', '');
}

// Update view on app load
updateView();

module.exports = updateView;
