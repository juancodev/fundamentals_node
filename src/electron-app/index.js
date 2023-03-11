const {
  app,
  BrowserWindow
} = require('electron');

let mainWindow;

app.on('ready', createWindow);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600
  });

  mainWindow.loadFile('index.html');
};