/**
 * Update state on local storage
 * @param itemName
 * @param itemValue
 */
function updateLocalStorage(itemName, itemValue) {
  window.localStorage.setItem(itemName, JSON.stringify(itemValue));
}

/**
 * Get state from local storage
 * @param itemName
 * @returns {any|null}
 */
function getLocalStorage(itemName) {
  const result = JSON.parse(window.localStorage.getItem(itemName));
  return result || null;
}

module.exports = { updateLocalStorage, getLocalStorage }
