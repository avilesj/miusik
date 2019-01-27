import React from 'react';
import Logo from '../Logo.jsx';
import TrackDetail from './TrackDetail.jsx';

const TrackDetailContainer = (props) => {
  return (
    <div id="track-page">
      <Logo/>
      <TrackDetail track={props.track}/>
    </div>
  );
};

export default TrackDetailContainer;
