const Sequelize = require('sequelize')
const { app } = require('electron')
const path = require('path')

const dbPath = path.join(__dirname, 'database.sqlite')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
})

const syncDatabase = async () => {
  try {
    await database.sync({ force: true })
    console.log('Database synced successfully.')
  } catch (err) {
    console.error('Error syncing: ' + err)
  }
}

module.exports = {
  database,
  syncDatabase,
}
