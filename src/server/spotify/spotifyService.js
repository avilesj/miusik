const { spotifyApiInstance } = require('./spotifyAuthenticationService');

class SpotifyService {

  constructor() {

  }

  async searchTrack(name) {

    let result = "";

    result = await spotifyApiInstance.searchTracks(name)
      .then(function (data) {
        console.log('Search tracks by ' + name);
        
        let content = {
          body: data.body,
          statusCode: data.statusCode
        }

        return content;
      }).catch(function (err) {

        console.error(err);
        return err;

      });

    return result;
  }


  async getTrack(id) {

    let result = "";

    result = await spotifyApiInstance.getTrack(id)
      .then(function (data) {
        console.log('Getting track with id: ' + id);

        let content = {
          body: data.body,
          statusCode: data.statusCode
        }

        return content;
      }).catch(function (err) {

        console.error(err);
        return err;

      });

    return result;

  }

  async getTrackAudioFeatures(id) {

    let result = "";

    result = await spotifyApiInstance.getAudioFeaturesForTrack(id)
      .then(function (data) {
        console.log('Getting track features with id: ' + id);

        let content = {
          body: data.body,
          statusCode: data.statusCode
        }

        return content;
      }).catch(function (err) {

        console.error(err);
        return err;

      });
    return result;
  }
}

module.exports = new SpotifyService();