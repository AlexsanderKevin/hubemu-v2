const Sequelize = require('sequelize')
const { database } = require('../database/database')
const GameDirModel = require('./GameDirModel')
const PlatformModel = require('./PlatformModel')

const GameModel = database.define('games', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idRawgApi: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  backgroundImgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  screenshotImgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
})

GameDirModel.hasMany(GameModel, {
  foreignKey: 'gameDirId',
})
PlatformModel.hasMany(GameModel, {
  foreignKey: 'platformId',
})

module.exports = GameModel
