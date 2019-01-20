import React from 'react';

const TrackMainInfo = () => {
    
    return(<div id="track-data">
    <div className="track-info-container track-info-text">
        <div className="title-duration">
            <h1>Sunflower</h1>
            <span>3:25</span>
        </div>
        <h2>Post Malone</h2>
        <h3>Spider Man: Into the Spiderverse</h3>
    </div>
    <div className="play-on-spotify-container">
        <a href="index.html">
            <div className="play-button-container">
                <h1>Play on Spotify</h1>
                <i className="fab fa-spotify play-button" />
            </div>
        </a>
    </div>
</div>);
}

export default TrackMainInfo;