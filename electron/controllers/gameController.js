const GameModel = require('../models/GameModel.js')
const { exec } = require('child_process')
const { fetchGameMetadataByName } = require('./rawgController.js')

const gameController = {
  findAll: async ( req, res ) => {
    const users = await GameModel.findAll()
    return users
  },

  fetchGamesFromDir: async (event, data) => {
    const { dirPath, fileExtension } = data[0]
    const command = `ls ${dirPath}/`

    try {
      const games = await new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
          if (err) { 
            console.error(err) 
            reject(err)
            return
          }

          resolve(
            stdout.split('\n')
            .map(line => line.replace(`${dirPath}/`, ''))
            .map(line => line.replace(`.${fileExtension}`))
          ) 
        })
      }) 
      return games
    }
    catch (err) { 
      throw new Error(`Error at requesting list of games from directory: ${err.message}`)
    }
  },

  saveGames: async (event, data) => {
    try {
      const savedGames = await GameModel.bulkCreate(data)
      return savedGames
    }
    catch ( err ) {
      console.error(err.message)
    }
  },

  playGame: async (event, data) => {
    const { dirPath, gamePath, exeCommand } = data[0]

    try {
      const command = `${exeCommand} "${gamePath}"`
      const options = {cwd: dirPath}
      exec(command, options, (err, stdout, stderr) => {
        if (err) { console.error(err) }
        if (stderr) { console.error(stderr) }

        return stdout
      })
    }
    catch (err) {
      throw new Error(`Error at playing game: ${err.message}`)
    }
  },

  setGameMetadata: async (event, data) => {
    const { id, backgroundImgUrl, screenshotImgUrl, idRawgApi } = data

    try {
      GameModel.update(
        { 
          backgroundImgUrl,
          screenshotImgUrl, 
          idRawgApi 
        },
        { where: { id } }
      )
      .then((result) => {
        if( result[0] === 1) {
          console.log('Game updated')
        }
        else {
          console.error('Game not found or not updated')
        }
      })
    }
    catch (err) {
      throw new Error(`Error at setting game metadata: ${err.message}`)
    }

  },
  
}

module.exports = gameController
