const { ipcMain } = require("electron")
const emulatorController = require("../controllers/emulatorController")


const initEmulatorRoutes = () => {
  ipcMain.handle('findAllEmulators', emulatorController.findAll)
  ipcMain.handle('registerDefaultEmulators', emulatorController.registerDefaultEmulators)
  ipcMain.handle('saveEmulators', emulatorController.saveEmulators)
}

module.exports = { initEmulatorRoutes }
