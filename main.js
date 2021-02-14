const path = require('path');
const { app, BrowserWindow, Tray, globalShortcut, nativeImage } = require('electron');

let mainWindow;
let tray = null;

function createWindow () {
  // Create app tray
  setupTray();

  // setup main window
  setupMainWindow();

  setTimeout(() => {
    mainWindow.show();
  }, 750);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

app.on('ready', () => {
  globalShortcut.register("MediaPlayPause", (event) => {
    event && event.preventDefault();
  });
})

// hide icon on dock
app.dock.hide();

function setupMainWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 196,
    height: 296,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    frame: false,
    resizable: false,
    fullscreenable: false,
    show: false
  })

  // load the index.html
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Position app window centered just below app tray icon
  positionWindow(tray.getBounds());
}

function setupTray() {
  const trayIconPath = path.join(__dirname, 'images/tray-icon.png');
  const nImage = nativeImage.createFromPath(trayIconPath);
  tray = new Tray(nImage);

  tray.setToolTip('Afina: Tuner App!');
  tray.setIgnoreDoubleClickEvents(true);
  tray.on('click', openWindow);
}

function openWindow() {
  //mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  mainWindow.show();
}

function positionWindow(bounds) {
  mainWindow.setPosition(bounds.x - (mainWindow.getBounds().width / 2), bounds.y);
}
