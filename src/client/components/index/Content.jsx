import React from "react";
import TrackContainer from "./TrackContainer.jsx";
import TrackNotFound from "./TrackNotFound.jsx";

let Content = (props) => {
    console.log(props.tracks);
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
