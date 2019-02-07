# miusik
App that functions on Spotify's API to display song features per the Spotify data. 

<img src="https://media.giphy.com/media/ieeaJrhd78uszY7AS9/source.gif" height="500">

It was developed using ```react``` with Client Side Rendering and ```express``` for the back end.

## Installation requirements

1. You must have access to the [Spotify Developer dashboard](https://developer.spotify.com/).
2. You must install NodeJS 10 (Version used for development)

## Installation

1. Define the ```SPOTIFY_KEY``` and ```SPOTIFY_SECRET_KEY``` enviromental variables. You get these keys from [Spotify Developer dashboard](https://developer.spotify.com/) (Client ID and Client Secret).

```
SPOTIFY_KEY=exampleSpotifyKey
SPOTIFY_SECRET_SECRET=exampleSpotifySECRETKey
```
2. Clone repository

```
git clone https://github.com/pavilesjose/miusik.git && cd miusik
```

3. Install dependencies

```
npm i
```

4. Run the app

```
npm run prod
```


## Development

For development workflow, the app uses ```nodemon``` and ```react-hot-loader``` with ```webpack-dev-server``` for client side development.

Feel free to submit a pull request!
