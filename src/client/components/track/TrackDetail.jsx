import React from 'react';
import TrackMainInfo from './TrackMainInfo.jsx';
import TrackFeatures from './TrackFeatures.jsx';

let TrackDetail = (props) => {
    return (
        <main id="track-data-container">
            <TrackMainInfo/>
            <TrackFeatures/>           
        </main>
    )
}

export default TrackDetail;