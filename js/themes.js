let store = require('./store');

// Get Elements
const themeRadios = document.querySelectorAll('.settings__radio[name="theme"]');

// Add change listener to theme buttons
themeRadios.forEach(themeRadio => themeRadio.addEventListener('change', handleThemeRadioChange))

/**
 * Handle click on a ratio theme button
 * @param event
 */
function handleThemeRadioChange(event) {
  updateTheme(event.target.value);
}

/**
 * Update selected theme
 * @param themeName
 */
function updateTheme(themeName) {
  store.theme = themeName;
  document.body.setAttribute('theme', themeName);
  document.querySelector(`.settings__radio[value="${store.theme}"]`).checked = true;
}

// Update theme on app load
updateTheme(store.theme);
