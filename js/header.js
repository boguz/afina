let store = require('./store');
const stopSample = require('./noteButtons');


// Get elements
const settingsButton = document.querySelector('#settingsButton');
const backButton = document.querySelector('#backButton');

/**
 * Add click listener to the settings button.
 * Go to the settings view, stop playing sample, update view
 */
settingsButton.addEventListener('click', () => {
  store.isSettings = true;
  stopSample();
  update();
})

/**
 * Add click listener to the back button.
 * Go back to the 'normal' view update view
 */
backButton.addEventListener('click', () => {
  store.isSettings = false;
  update();
})

/**
 * Update which button is visible on the header: settings or back button
 */
function updateHeader() {
  // Update settings button state
  store.isSettings
    ? settingsButton.setAttribute('hidden', '')
    : settingsButton.removeAttribute('hidden');

  // Update back button state
  store.isSettings
    ? backButton.removeAttribute('hidden')
    : backButton.setAttribute('hidden', '');
}

// Call updateHeader once on load
updateHeader();

module.exports = updateHeader;
