const { spotifyApiInstance } = require('./spotifyAuthenticationService');

class SpotifyService {

  async searchTrack(name) {

    const spotifyData = await spotifyApiInstance.searchTracks(name);
    const content = {
      body: spotifyData.body,
      statusCode: spotifyData.statusCode
    };
 
    return content;
  }


  async getTrack(id) { 
   
    const spotifyData = await spotifyApiInstance.getTrack(id);
    const content = {     
      body: spotifyData.body,
      statusCode: spotifyData.statusCode
    };

    return content;
  }

  async getTrackAudioFeatures(id) {

    const spotifyData = await spotifyApiInstance.getAudioFeaturesForTrack(id);
    const content = {
      body: spotifyData.body,
      statusCode: spotifyData.statusCode
    };
 
    return content;
  }
}

module.exports = new SpotifyService();