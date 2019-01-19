import React from "react";
import TrackContainer from "./TrackContainer.jsx";

let Content = (props) => {
    console.log(props.tracks);
    if(props.tracks.length < 1){
        return <div>Nothing</div>;
    }
  return (
    <main id="content-container" className="centered-container">
        <TrackContainer tracks={props.tracks}/>      
    </main>
  );
};

export default Content;
