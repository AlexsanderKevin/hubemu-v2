const Game = require('../models/Game.js')
const { exec } = require('child_process')

const gameController = {
  findAll: async ( req, res ) => {
    console.log(`finding all games`)
    const users = await Game.findAll()
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

        console.log(`Retorno: ${stdout}`)

        return stdout
      })
    }
    catch (err) {
      throw new Error(`Error at playing game: ${err.message}`)
    }
  },

  fetchGameMetadata: async (event, data) => {
    try {
      const gameName='minecraft'
      const apiKey = '91a95aea7e3d4fdbac33f58060e1fe71'
      // URL base da RAWG API
      const baseUrl = 'https://api.rawg.io/api/';
      // Endpoint para buscar informações sobre o jogo pelo nome
      const endpoint = 'games';
      // Parâmetros da consulta (nome do jogo)
      const params = new URLSearchParams({ search: gameName, key: apiKey });
      // Construa a URL completa da solicitação
      const url = `${baseUrl}${endpoint}?${params}`;
      
      // Faça a solicitação à API usando fetch
      const response = await fetch(url);
      const dataResponse = await response.json();
      console.log(dataResponse)

      // Envia o resultado para o front-end
      event.sender.send('game-info', dataResponse);
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      // Se houver um erro, envie uma mensagem de erro para o front-end
      event.sender.send('game-info-error', error.message);
    }
  }
}

module.exports = gameController
