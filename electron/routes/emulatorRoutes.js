const { ipcMain } = require("electron")
const emulatorController = require("../controllers/emulatorController")


const initEmulatorRoutes = () => {
  ipcMain.handle('findAllEmulators', emulatorController.findAll)
  ipcMain.handle('registerDefaultEmulators', emulatorController.registerDefaultEmulators)
}

module.exports = { initEmulatorRoutes }
