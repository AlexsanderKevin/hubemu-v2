const { ipcMain } = require("electron")
const platformController = require("../controllers/platformController")


const initPlatformRoutes = () => {
  ipcMain.handle('findAllPlatforms', platformController.findAll)
}

module.exports = { initPlatformRoutes }
