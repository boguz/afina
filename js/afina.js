const updateHeader = require('./js/header');
const updateView = require('./js/views');
require('./js/themes');
require('./js/speed');
require('./js/instrumentButtons');
require('./js/noteButtons');
require('./js/closeButton');

////// UPDATE
function update() {
  updateHeader();
  updateView();
}
