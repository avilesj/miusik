const SpotifyWebApi = require('spotify-web-api-node');
const spotify_auth = require('./global');

class SpotifyService {

  constructor() {
    this.clientId = process.env.SPOTIFY_KEY;
    this.clientSecret = process.env.SPOTIFY_SECRET_KEY;
    this.spotifyApiInstance = new SpotifyWebApi({
      clientId: this.clientId,
      clientSecret: this.clientSecret
    });
  }

  async createToken() {

    let credentials = await this.spotifyApiInstance.clientCredentialsGrant().then(
      function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        console.log('Current global object: ' + spotify_auth.key);
        return data;
      },
      function (err) {
        console.log('Something went wrong when retrieving an access token', err);
      }
    );

    global.spotify_auth.created = Date.now();
    global.spotify_auth.expire = global.spotify_auth.created + (1000 * credentials.body['expires_in']);
    global.spotify_auth.key = credentials.body['access_token'];
    this.spotifyApiInstance.setAccessToken(credentials.body['access_token']);

  }

  async getToken() {
    console.log("Current token creation time: " + global.spotify_auth.created);
    console.log("Current token expiration time: " + global.spotify_auth.expire);
    console.log("Current time: " + Date.now());
    console.log("Current token key: " + global.spotify_auth.key);

    if (Date.now() > global.spotify_auth.expire || global.spotify_auth.expire === null) {
      console.log("==============Creating new token==============");
      await this.createToken().catch("Couldn't create token");
    }

  }

  async searchArtist(name) {
    let result = "";
    await this.getToken();
    result = await this.spotifyApiInstance.searchArtists(name)
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
    await this.getToken();
    result = await this.spotifyApiInstance.getArtist(id)
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