const Sequelize = require('sequelize')
const { database } = require('../database/database')

const Game = database.define('games', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Game
