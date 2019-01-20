import React from 'react';

const TrackFeatures = () => {
    return(<div className="track-features">
    <div
        onClick="toggleFetureHelp('danceability-info')"
        className="feature track-info-text"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Danceability</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>98%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>
        <div id="danceability-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
    <div
        className="feature track-info-text"
        onClick="toggleFetureHelp('energy-info')"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Energy</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>38%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>
        <div id="energy-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
    <div
        className="feature track-info-text"
        onClick="toggleFetureHelp('acousticness-info')"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Acousticness</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>55%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>
        <div id="acousticness-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
    <div
        className="feature track-info-text"
        onClick="toggleFetureHelp('instrumentalness-info')"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Instrumentalness</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>21%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>

        <div id="instrumentalness-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
    <div
        className="feature track-info-text"
        onClick="toggleFetureHelp('liveness-info')"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Liveness</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>11%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>
        <div id="liveness-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
    <div
        className="feature track-info-text"
        onClick="toggleFetureHelp('speechiness-info')"
    >
        <div className="feature-name-container">
            <h1 className="feature-name">Speechiness</h1>
        </div>
        <div className="feature-level-container">
            <div className="feature-level centered-container" style={{ width: " 0%" }}>
                <h2>79%</h2>
            </div>
            <i className="fas fa-chevron-circle-down" />
        </div>
        <div id="speechiness-info" className="feature-help" hidden>
            <p>
                Danceability describes how suitable a track is for dancing based
                on a combination of musical elements including tempo, rhythm
                stability, beat strength, and overall regularity. A value of 0
                is least danceable and 100 is most danceable.
  </p>
        </div>
    </div>
</div>);
}

export default TrackFeatures;