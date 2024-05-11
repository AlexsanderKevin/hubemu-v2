const Sequelize = require('sequelize')
const { database } = require('../database/database')

const Game = database.define('games', {
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
  idPlatform: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
})

module.exports = Game
