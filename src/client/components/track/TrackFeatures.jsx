import React from 'react';
import Feature from './Feature.jsx';

const TrackFeatures = () => {
    return (<div className="track-features">
        <Feature featureName = "Danceability" percentage="55"/>
        <Feature featureName = "energy" percentage="55"/>
    </div>);
}

export default TrackFeatures;