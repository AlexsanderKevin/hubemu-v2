const apiKey = '91a95aea7e3d4fdbac33f58060e1fe71'
const baseUrl = 'https://api.rawg.io/api/'


const rawgController = {

  async fetchGameMetadataByName (event, data) {
    try {

      const { gameName } = data[0]
      const endpoint = 'games';
      const params = new URLSearchParams({ search: gameName, key: apiKey });
      const url = `${baseUrl}${endpoint}?${params}`;
      
      const response = await fetch(url);
      const dataResponse = await response.json();
      console.log(dataResponse.results[0])

      const { id, background_imagle, short_screenshot } = dataResponse.results[0]

      return { id, background_imagle, short_screenshot }

    } catch (error) {

      console.error('Erro ao fazer a solicitação:', error);
      return error

    }
  },

}

module.exports = rawgController
