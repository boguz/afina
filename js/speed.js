let store = require('./store');
let savedSpeedName;

////// SPEED
const speedRadios = document.querySelectorAll('.settings__radio[name="speed"]');
speedRadios.forEach(speedRadio => speedRadio.addEventListener('change', handleSpeedRadioChange))

function handleSpeedRadioChange(event) {
  console.log(event.target.value);
  if (event.target.value === 'slow') {
    store.speed = '10000';
  } else if (event.target.value === 'normal') {
    store.speed = '6000';
  } else {
    store.speed = '3000';
  }
}

if (store.speed === '3000' ) {
  savedSpeedName = 'fast';
} else if (store.speed === '6000' ) {
  savedSpeedName = 'normal';
} else {
  savedSpeedName = 'slow';
}

document.querySelector(`.settings__radio[value="${savedSpeedName}"]`).checked = true;
