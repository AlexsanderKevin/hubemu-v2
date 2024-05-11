const { initGameDirRoutes } = require('./gameDirRoutes')
const { initGameRoutes } = require('./gameRoutes')
const { initRawgRoutes } = require('./rawgRoutes')

const initRoutes = () => {
  initGameRoutes()
  initRawgRoutes()
  initGameDirRoutes()
}

module.exports = { initRoutes }
