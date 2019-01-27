import React from 'react';
import TrackContainer from './TrackContainer.jsx';
import TrackNotFound from './TrackNotFound.jsx';

const Content = (props) => {
  if(props.searchPerformed && !props.dataFound){
    return <TrackNotFound/>;
  }
  return (
    <main id="content-container" className="centered-container">
      <TrackContainer tracks={props.tracks}/>      
    </main>
  );
};

export default Content;
