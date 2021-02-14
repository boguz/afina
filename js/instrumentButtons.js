let store = require('./store');
const stopSample = require('./noteButtons');

// Get elements
// The instrument buttons are the buttons to change between the different instruments: guitar or ukulele
const instrumentButtons = document.querySelectorAll('.button--instrument');
let currentInstrument;

// Add click listener to the instrument buttons
instrumentButtons.forEach(instrumentButton => {
  instrumentButton.addEventListener('click', handleInstrumentClick)
})

/**
 * Handle click on an instrument button.
 *  - set active instrument
 *  - change visible notes
 *  - stop any sample that might be playing
 * @param event
 */
function handleInstrumentClick(event) {
  if (!event.target === currentInstrument) return;
  changeActiveButton(event.target);
  changeVisibleNotes(event.target.dataset.instrument)
  store.instrument = event.target.dataset.instrument;
  stopSample();
}

/**
 * Set the current active button, toggle active classes
 * @param clickedButton
 */
function changeActiveButton(clickedButton) {
  document.querySelector('.button--instrument.button--active').classList.remove('button--active');
  clickedButton.classList.add('button--active');
  currentInstrument = clickedButton;
}

/**
 * Change the visible notes according to the chosen instrument
 * @param instrumentName
 */
function changeVisibleNotes(instrumentName) {
  document.querySelector('.notes--visible').classList.remove('notes--visible');
  document.querySelector(`.notes--${instrumentName}`).classList.add('notes--visible');
}

// Set correct state on load
document.querySelector(`.button--instrument[data-instrument="${store.instrument}"]`).classList.add('button--active');
changeVisibleNotes(store.instrument);
