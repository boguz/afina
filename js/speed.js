let store = require('./store');
let savedSpeedName;

// Get elements
const speedRadios = document.querySelectorAll('.settings__radio[name="speed"]');

// Listen for change on the speed buttons
speedRadios.forEach(speedRadio => speedRadio.addEventListener('change', handleSpeedRadioChange))

/**
 * Handle change of the speed buttons.
 * Set correct 'speed' value on the store according to the selected button
 * @param event
 */
function handleSpeedRadioChange(event) {
  if (event.target.value === 'slow') {
    store.speed = '10000';
  } else if (event.target.value === 'normal') {
    store.speed = '6000';
  } else {
    store.speed = '3000';
  }

  updateSpeedButtons();
}

/**
 * Update the checked speed button
 */
function updateSpeedButtons() {
  if (store.speed === '3000' ) {
    savedSpeedName = 'fast';
  } else if (store.speed === '6000' ) {
    savedSpeedName = 'normal';
  } else {
    savedSpeedName = 'slow';
  }

  document.querySelector(`.settings__radio[value="${savedSpeedName}"]`).checked = true;
}

// update checked speed button on app load
updateSpeedButtons();
