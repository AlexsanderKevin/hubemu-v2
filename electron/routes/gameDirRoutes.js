const gameDirController = require("../controllers/gameDirController")
const { ipcMain } = require("electron")


const initGameDirRoutes = () => {
  ipcMain.handle('findAllGameDirs', gameDirController.findAll)
  ipcMain.handle('saveGameDir', gameDirController.saveGameDir)
}

module.exports = { initGameDirRoutes }
