const Sequelize = require('sequelize')
const { database } = require('../database/database')

const PlatformModel = database.define('games', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  },
  dirPath: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = PlatformModel
