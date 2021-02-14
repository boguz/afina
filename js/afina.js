const updateHeader = require('./js/header');
const updateView = require('./js/views');
require('./js/themes');
require('./js/speed');
require('./js/instrumentButtons');
require('./js/noteButtons');
require('./js/closeButton');

/**
 * Update UI by updating the header and the view components
 */
function update() {
  updateHeader();
  updateView();
}
