import React from 'react';
import Feature from './Feature.jsx';

const TrackFeatures = (props) => {
    console.log("Feature props: ", props.features.data);

    const featureComponents = [];
    const featureList = {};
    const featureConstants = ["danceability", "energy", "acousticness", "instrumentalness", "liveness", "speechiness"];
    featureConstants.map((featureName) => {
        featureList[featureName] = Math.floor(props.features.data[featureName] * 100);
    })
    
    for(let featureName in featureList){
        featureComponents.push(<Feature key={featureName} featureName = {featureName} percentage={featureList[featureName]}/>);
    }
    return (<div className="track-features">
        {featureComponents};
    </div>);
}

export default TrackFeatures;