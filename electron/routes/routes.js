const { initGameDirRoutes } = require('./gameDirRoutes')
const { initGameRoutes } = require('./gameRoutes')
const { initRawgRoutes } = require('./rawgRoutes')
const { initEmulatorRoutes } = require('./emulatorRoutes')

const initRoutes = () => {
  initGameRoutes()
  initRawgRoutes()
  initGameDirRoutes()
  initEmulatorRoutes()
}

module.exports = { initRoutes }
