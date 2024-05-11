const rawgController = require("../controllers/rawgController")
const { ipcMain } = require("electron")


const initRawgRoutes = () => {
  ipcMain.handle('fetchGameMetadataByName', rawgController.fetchGameMetadataByName)
}

module.exports = { initRawgRoutes }
