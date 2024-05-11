const GameDirModel = require("../models/GameDirModel")

const gameDirController = {

  findAll: async ( req, res ) => {
    console.log(`finding all games`)
    const dirs = await GameDirModel.findAll()
    return dirs
  },

}

module.exports = gameDirController

