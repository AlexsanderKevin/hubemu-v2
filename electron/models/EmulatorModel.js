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
    type: Sequelize.STRING,
    allowNull: false,
  },
  dirPath: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  exeCommand: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = EmulatorModel
