const gameController = require("../controllers/gameController")
const { ipcMain } = require("electron")

const initGameRoutes = () => {
  ipcMain.handle('playGame', gameController.playGame)
  ipcMain.handle('findAllGames', gameController.findAll)
  ipcMain.handle('fetchGamesFromDir', gameController.fetchGamesFromDir)
  ipcMain.handle('fetchGameMetadata', gameController.fetchGameMetadata)
}

module.exports = { initGameRoutes }
