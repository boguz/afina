const remote = require('electron').remote;
const stopSample = require('./noteButtons');

document.querySelector('#closeButton').addEventListener("click", function () {
  const window = remote.getCurrentWindow();
  const activeButton = document.querySelector('.button--note.button--active');

  if (activeButton) activeButton.classList.remove('button--active');

  stopSample();
  window.hide();
});
