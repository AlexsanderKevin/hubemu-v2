const GameDirModel = require("../models/GameDirModel")

const gameDirController = {

  findAll: async ( req, res ) => {
    const dirs = await GameDirModel.findAll()
    return dirs
  },

  saveGameDir: async ( event, data ) => {
    const { dirPath, name, supportedFileExtension } = data[0]
    const newDir = await GameDirModel.create({ dirPath, name, supportedFileExtension })
    return newDir.dataValues
  }

}

module.exports = gameDirController

