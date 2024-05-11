const gameDirController = require("../controllers/gameDirController")
const { ipcMain } = require("electron")


const initGameDirRoutes = () => {
  ipcMain.handle('findAllGameDirs', gameDirController.findAll)
}

module.exports = { initGameDirRoutes }
