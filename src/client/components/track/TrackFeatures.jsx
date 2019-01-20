import React from 'react';
import Feature from './Feature.jsx';

const TrackFeatures = (props) => {
    console.log("Feature props: ", props.features.data);

    const featureList = ["danceability", "energy", "acousticness", "instrumentalness", "liveness", "speechiness"];

    const featureMap = new Map(Object.entries(props.features.data));
    const featureComponents = [];
    featureMap.forEach((value, feature) =>{
        let featureName = feature;
        let featureValue = value;
        console.log("Rendering: ", featureName);
        featureComponents.push(<Feature key={featureName} featureName = {featureName} percentage={Math.floor(featureValue * 100)}/>);
    })

    console.log(featureComponents[1]);
    return (<div className="track-features">
        {featureComponents.filter((component) => featureList.includes(component.props.featureName))};
    </div>);
}

export default TrackFeatures;