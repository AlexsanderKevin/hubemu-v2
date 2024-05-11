const { initGameRoutes } = require('./gameRoutes')
const { initRawgRoutes } = require('./rawgRoutes')

const initRoutes = () => {
  initGameRoutes()
  initRawgRoutes()
}

module.exports = { initRoutes }
