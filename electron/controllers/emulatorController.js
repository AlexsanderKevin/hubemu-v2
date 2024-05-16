const EmulatorModel = require("../models/EmulatorModel")

const emulatorController = {

  findAll: async ( req, res ) => {
    console.log(`finding all games`)
    const emulators = await EmulatorModel.findAll()
    return emulators
  },

}

module.exports = emulatorController
