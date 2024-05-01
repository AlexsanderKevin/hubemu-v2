const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { syncDatabase } = require('./database')
const { initRoutes } = require('./routes/routes')
const url = require('url');

function createWindow() {
  const win = new BrowserWindow ({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname + '/preload.js')
    }
  })
  
  syncDatabase()
  initRoutes()
  win.loadURL(url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    }));
  //win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)
