function updateLocalStorage(itemName, itemValue) {
  window.localStorage.setItem(itemName, JSON.stringify(itemValue));
}

function getLocalStorage(itemName) {
  const result = JSON.parse(window.localStorage.getItem(itemName));
  return result || null;
}

module.exports = { updateLocalStorage, getLocalStorage }
