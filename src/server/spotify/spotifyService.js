const {spotifyApiInstance} = require('./spotifyAuthenticationService');

class SpotifyService {

  constructor() {
    
  }

async searchArtist(name) {
    
    let result = "";

    result = await spotifyApiInstance.searchArtists(name)
      .then(function (data) {
        console.log('Search artists by ' + name);
        return data;
      }, function (err) {
        console.error(err);
      });

    return result;
  }


  async getArtist(id) {
    
    let result = "";

    result = await spotifyApiInstance.getArtist(id)
      .then(function (data) {
        console.log('Getting artist with id: ' + id);
        return data;
      }, function (err) {
        console.error(err);
      });

    return result;
  }
}

module.exports = new SpotifyService();