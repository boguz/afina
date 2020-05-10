let store = require('./store');
const stopSample = require('./noteButtons');

////// INSTRUMENT BUTTONS
const instrumentButtons = document.querySelectorAll('.button--instrument');
let currentInstrument;

instrumentButtons.forEach(instrumentButton => {
  instrumentButton.addEventListener('click', handleInstrumentClick)
})

function handleInstrumentClick(event) {
  if (!event.target === currentInstrument) return;
  changeActiveButton(event.target);
  changeVisibleNotes(event.target.dataset.instrument)
  store.instrument = event.target.dataset.instrument;
  stopSample();
}

function changeActiveButton(clickedButton) {
  document.querySelector('.button--instrument.button--active').classList.remove('button--active');
  clickedButton.classList.add('button--active');
  currentInstrument = clickedButton;
}

function changeVisibleNotes(instrumentName) {
  document.querySelector('.notes--visible').classList.remove('notes--visible');
  document.querySelector(`.notes--${instrumentName}`).classList.add('notes--visible');
}

document.querySelector(`.button--instrument[data-instrument="${store.instrument}"]`).classList.add('button--active');
changeVisibleNotes(store.instrument);
