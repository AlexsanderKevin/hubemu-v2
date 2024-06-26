const gameController = require("../controllers/gameController")
const { ipcMain } = require("electron")

const initGameRoutes = () => {
  ipcMain.handle('playGame', gameController.playGame)
  ipcMain.handle('findAllGames', gameController.findAll)
  ipcMain.handle('findFavoriteGames', gameController.findFavoriteGames)
  ipcMain.handle('fetchGamesFromDir', gameController.fetchGamesFromDir)
  ipcMain.handle('saveGames', gameController.saveGames)
  ipcMain.handle('setGameMetadata', gameController.setGameMetadata)
  ipcMain.handle('setGameEmulator', gameController.setGameEmulator)
  ipcMain.handle('setGameFavorite', gameController.setGameFavorite)
  ipcMain.handle('deleteGame', gameController.deleteGame)
}

module.exports = { initGameRoutes }
