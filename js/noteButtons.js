let store = require('./store');

// Get guitar and ukulele samples
const { guitarSamples, ukuleleSamples } = require('./samples');

// Initialized player variables
let currentSample = null;
let sampleLooper;

// Note buttons
const guitarNoteButtons = document.querySelectorAll('.notes--guitar .button--note');
const ukuleleNoteButtons = document.querySelectorAll('.notes--ukulele .button--note');
const noteButtons = [...guitarNoteButtons, ...ukuleleNoteButtons];
noteButtons.forEach(noteButton => noteButton.addEventListener('click', handleNoteButtonClick));

let currentButton = null;
let samplePlaying = false;

/**
 * Add keydown event to listen for space click
 */
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    handleSpaceClick();
  }
});

/**
 * Handle click on a note button
 *  - toggle active button classes
 *  - play / stop sample
 *  - set 'samplePlaying' variable value
 * @param event
 */
function handleNoteButtonClick(event) {
  currentButton = document.querySelector('.button--note.button--active');

  toggleActiveNoteButton(event.target, currentButton);

  if (event.target.classList.contains('button--active')) {
    const activeInstrumentSamples = store.instrument === 'guitar' ? guitarSamples : ukuleleSamples;
    playSample(activeInstrumentSamples[parseInt(event.target.getAttribute('string')) - 1]);
    samplePlaying = true;
  } else {
    stopSample();
    samplePlaying = false;
  }
}

/**
 * Toggle classes on the note buttons to show the correct active button
 * @param target
 * @param currentButton
 */
function toggleActiveNoteButton(target, currentButton) {
  if (target === currentButton) {
    currentButton.classList.remove('button--active');
    return;
  }
  if (currentButton) currentButton.classList.remove('button--active');
  target.classList.add('button--active');
}

/**
 * Stop and reset sample
 * Reset the duration bar
 */
function stopSample() {
  if (currentSample) {
    currentSample.pause();
    currentSample.currentTime = 0;
    clearInterval(sampleLooper);
    stopDurationBar();
  }
}

/**
 * Play a sample
 * Start duration bar animation
 * @param sample
 */

function playSample(sample) {
  if (currentSample) {
    stopSample();
  }
  currentSample = sample;
  currentSample.play();

  sampleLooper = loopSample();

  animateDurationBar();
}

/**
 * Loop a sample, so the sample repeats
 * @returns {number}
 */
function loopSample() {
  return window.setInterval(function(){
    playSample(currentSample);
  }, store.speed);
}

/**
 * Set the 'duration-bar-speed' custom css variable,
 * so we animate the duration bar with correct speed
 */
function animateDurationBar() {
    document.documentElement.style.setProperty('--duration-bar-speed', `${store.speed}ms`);
  setTimeout(() => {
    document.querySelector('.duration-bar__bar').classList.add('duration-bar__bar--active');
  });
}

/**
 * Stop the duration bar animation
 */
function stopDurationBar() {
  document.querySelector('.duration-bar__bar').classList.remove('duration-bar__bar--active');
}

/**
 * Handle click on spacebar
 *  - if no sample playing: play first sample
 *  - if sample playing: play next sample
 *  - if sample playing is the last in instrument: play again the first sample
 */
function handleSpaceClick() {
  const activeNoteButtons = store.instrument === 'guitar' ? [...guitarNoteButtons] : [...ukuleleNoteButtons];
  const activeButton = document.querySelector('.button--note.button--active');
  const activeIndex = activeNoteButtons.indexOf(activeButton);
  if (samplePlaying && activeIndex < activeNoteButtons.length - 1) {
    activeNoteButtons[activeIndex + 1].click();
  } else if (!samplePlaying || activeIndex === activeNoteButtons.length - 1) {
    activeNoteButtons[0].click();
  }
}

module.exports = stopSample;
