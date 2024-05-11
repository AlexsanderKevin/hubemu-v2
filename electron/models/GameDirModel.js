const Sequelize = require('sequelize')
const { database } = require('../database/database')

const GameDirModel = database.define('gameDirs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  dirPath: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  supportedFileExtension: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = GameDirModel
