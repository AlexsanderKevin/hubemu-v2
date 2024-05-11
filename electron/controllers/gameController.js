const GameModel = require('../models/GameModel.js')
const { exec } = require('child_process')

const gameController = {
  findAll: async ( req, res ) => {
    console.log(`finding all games`)
    const users = await GameModel.findAll()
    return users
  },

  fetchGamesFromDir: async (event, data) => {
    const { dirPath, fileExtension } = data[0]
    const command = `ls ${dirPath}/*${fileExtension}`

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
  
}

module.exports = gameController
