const Sequelize = require('sequelize')
const { database } = require('../database/database')
const GameDirModel = require('./GameDirModel')
const EmulatorModel = require('./EmulatorModel')

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
  isFavorited: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
})

GameDirModel.hasMany(GameModel, {
  foreignKey: 'gameDirId',
})
EmulatorModel.hasMany(GameModel, {
  foreignKey: 'emulatorId',
})

module.exports = GameModel
