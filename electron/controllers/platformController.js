const PlatformModel = require("../models/PlatformModel")

const platformController = {

  findAll: async ( req, res ) => {
    console.log(`finding all games`)
    const platforms = await PlatformModel.findAll()
    return platforms
  },

}

module.exports = platformController
