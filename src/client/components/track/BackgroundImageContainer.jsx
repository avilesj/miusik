import React from 'react';

const BackgroundImageContainer = (props) => {
  return (
    <div id="background-image-container">
      <div
        id="background-image"
        style={{ background: 'linear-gradient(to bottom, rgba(53,56,57,0) 50%, rgba(53,56,57,1)), url('+ props.track.data.album.images[0].url +') no-repeat center/cover' }}
      ></div>
    </div>
  );
};

export default BackgroundImageContainer;