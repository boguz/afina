let store = require('./store');

////// THEMES
const themeRadios = document.querySelectorAll('.settings__radio[name="theme"]');
themeRadios.forEach(themeRadio => themeRadio.addEventListener('change', handleThemeRadioChange))

function handleThemeRadioChange(event) {
  updateTheme(event.target.value);
}

function updateTheme(themeName) {
  store.theme = themeName;
  document.body.setAttribute('theme', themeName);
  document.querySelector(`.settings__radio[value="${store.theme}"]`).checked = true;
}

updateTheme(store.theme);
