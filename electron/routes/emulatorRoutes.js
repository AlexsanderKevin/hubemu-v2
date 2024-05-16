const { ipcMain } = require("electron")
const emulatorController = require("../controllers/emulatorController")


const initEmulatorRoutes = () => {
  ipcMain.handle('findAllEmulators', emulatorController.findAll)
}

module.exports = { initEmulatorRoutes }
