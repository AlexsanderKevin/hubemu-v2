const EmulatorModel = require("../models/EmulatorModel")
const GameModel = require("../models/GameModel")

const emulatorController = {

  findAll: async ( req, res ) => {
    try {
      let emulators = await EmulatorModel.findAll({
        include: [ GameModel ]
      })
      emulators = emulators.map(emulator => emulator.get({ plain: true }))
      return emulators
    }
    catch (err) {
      console.log('Error finding all emulators: ', err.message)
    }
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
    catch ( err ) { console.error(err.message) }
  },

  setEmulatorDirPath: async (event, data) => {
    const { dirPath, id } = data

    try {
      EmulatorModel.update({ dirPath }, { where: { id } })
      .then(result => {
        if( result[0] === 1 ) console.log('Emulator updated')
        else console.error('Emulator not found or not updated')
      })
    }
    catch ( err ) { console.error(err.message) }
  },

}

module.exports = emulatorController
