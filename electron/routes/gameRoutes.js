const gameController = require("../controllers/gameController")
const { ipcMain } = require("electron")

const initGameRoutes = () => {
  ipcMain.handle('playGame', gameController.playGame)
  ipcMain.handle('findAllGames', gameController.findAll)
  ipcMain.handle('list', gameController.list)
}

module.exports = { initGameRoutes }
