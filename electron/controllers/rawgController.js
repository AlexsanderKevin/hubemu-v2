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
      console.log('data response: ', dataResponse.results[0].background_image)

      const { id, background_image, short_screenshots } = dataResponse.results[0]
      const result = { id, background_image, short_screenshot: short_screenshots[0].image }
      console.log('result: ', result)

      return result

    } catch (error) {

      console.error('Erro ao fazer a solicitação:', error);
      return error

    }
  },

}

module.exports = rawgController
