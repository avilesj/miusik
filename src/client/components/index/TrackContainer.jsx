import React from 'react';
import Track from './Track.jsx';

const TrackContainer = (props) => {
  return (
    <div id="track-container">
      {props.tracks.map((element) => <Track key={element.id} trackDetail = {element}/>)}
    </div>
  );
};

export default TrackContainer;