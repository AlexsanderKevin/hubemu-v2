const EmulatorModel = require("../models/EmulatorModel")

const emulatorController = {

  findAll: async ( req, res ) => {
    const emulators = await EmulatorModel.findAll()
    return emulators
  },

  saveEmulators: async ( event, data ) => {
    try {
      const savedEmulators = await EmulatorModel.bulkCreate(data)
      return savedEmulators

    }
    catch ( err ) {
      console.error(err.message)
    }
  },

  registerDefaultEmulators: async ( req, res ) => {
    const defaultEmulators = [
      { name: 'PCSX2', platform: 'Playstation 2', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
      { name: 'Citra', platform: 'Nintendo 3DS', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
      { name: 'Cemu', platform: 'Nintendo WiiU', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
      { name: 'Ryujinx', platform: 'Nintendo Switch', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
      { name: 'MyBoy', platform: 'GBA', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    ]

    try {
      const registeredDefaultEmulators = await EmulatorModel.bulkCreate(defaultEmulators)
      return registeredDefaultEmulators

    }
    catch ( err ) {
      console.error(err.message)
    }
  }

}

module.exports = emulatorController
