const Sequelize = require('sequelize')
const { database } = require('../database/database')

const EmulatorModel = database.define('emulators', {
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
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = EmulatorModel
