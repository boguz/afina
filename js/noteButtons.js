let store = require('./store');

////// NOTE BUTTONS
const guitar_1 = new Audio('./sounds/guitar-E3.m4a');
const guitar_2 = new Audio('./sounds/guitar-B2.m4a');
const guitar_3 = new Audio('./sounds/guitar-G2.m4a');
const guitar_4 = new Audio('./sounds/guitar-D2.m4a');
const guitar_5 = new Audio('./sounds/guitar-A1.m4a');
const guitar_6 = new Audio('./sounds/guitar-E1.m4a');
const guitarSamples = [guitar_1, guitar_2, guitar_3, guitar_4, guitar_5, guitar_6];

const ukulele_1 = new Audio('./sounds/ukulele-A3.m4a');
const ukulele_2 = new Audio('./sounds/ukulele-E3.m4a');
const ukulele_3 = new Audio('./sounds/ukulele-C3.m4a');
const ukulele_4 = new Audio('./sounds/ukulele-G3.m4a');
const ukuleleSamples = [ukulele_1, ukulele_2, ukulele_3, ukulele_4]

let currentSample = null;
let sampleLooper;

const noteButtons = document.querySelectorAll('.button--note');
noteButtons.forEach(noteButton => noteButton.addEventListener('click', handleNoteButtonClick));

function handleNoteButtonClick(event) {
  const currentButton = document.querySelector('.button--note.button--active');

  toggleActiveNoteButton(event.target, currentButton);

  if (event.target.classList.contains('button--active')) {
    const activeInstrumentSamples = store.instrument === 'guitar' ? guitarSamples : ukuleleSamples;
    playSample(activeInstrumentSamples[parseInt(event.target.getAttribute('string')) - 1]);
  } else {
    stopSample();
  }
}

function toggleActiveNoteButton(target, currentButton) {
  if (target === currentButton) {
    currentButton.classList.remove('button--active');
    return;
  }
  if (currentButton) currentButton.classList.remove('button--active');
  target.classList.add('button--active');
}

function stopSample() {
  if (currentSample) {
    currentSample.pause();
    currentSample.currentTime = 0;
    clearInterval(sampleLooper);
    stopDurationBar();
  }
}

function playSample(sample) {
  if (currentSample) {
    stopSample();
  }
  currentSample = sample;
  currentSample.play();

  sampleLooper = loopSample();

  animateDurationBar();
}

function loopSample() {
  return window.setInterval(function(){
    playSample(currentSample);
  }, store.speed);
}

function animateDurationBar() {
    document.documentElement.style.setProperty('--duration-bar-speed', `${store.speed}ms`);
  setTimeout(() => {
    document.querySelector('.duration-bar__bar').classList.add('duration-bar__bar--active');
  });
}

function stopDurationBar() {
  document.querySelector('.duration-bar__bar').classList.remove('duration-bar__bar--active');
}

module.exports = stopSample;
