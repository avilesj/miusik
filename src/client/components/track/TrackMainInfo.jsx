import React from 'react';

const convertToMinutes = (miliseconds) => {

    const seconds = miliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const trackSeconds = Math.floor(seconds - (minutes * 60));
    return(`${minutes}:${trackSeconds}`);
};

const TrackMainInfo = (props) => {

    const track = {
        name: props.trackInfo.data.name,
        duration: props.trackInfo.data.duration_ms,
        artists: props.trackInfo.data.artists,
        spotify_url: props.trackInfo.data.external_urls.spotify,
        album: props.trackInfo.data.album.name,
    }
    console.log(props);
    return(<div id="track-data">
    <div className="track-info-container track-info-text">
        <div className="title-duration">
            <h1>{track.name}</h1>
            <span>Duration: {convertToMinutes(track.duration)}</span>
        </div>
        <h2>{track.artists.map( (e, index) => (index+1) === track.artists.length? e.name : e.name + ", ")}</h2>
        <h3>{track.album}</h3>
    </div>
    <div className="play-on-spotify-container">
        <a href={track.spotify_url}>
            <div className="play-button-container">
                <h1>Play on Spotify</h1>
                <i className="fab fa-spotify play-button" />
            </div>
        </a>
    </div>
</div>);
}

export default TrackMainInfo;