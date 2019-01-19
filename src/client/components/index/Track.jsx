import React from 'react';
import {Link} from 'react-router-dom';

let Track = (props) => {
    
    let track = {
        id: props.trackDetail.id,
        name: props.trackDetail.name,
        artist: props.trackDetail.artists,
        imageUrl: props.trackDetail.album.images[0].url,
        album: props.trackDetail.album.name
    }
    return(<div
        className="track"
        style={{
            background:
                "url("+track.imageUrl+") no-repeat center/cover"
        }}>
        <Link to={"/track/" + track.id}>
            <div className="track-info">
                <div className="track-name">
                    <h1>{track.name}</h1>
                </div>
                <div className="track-artists">
                    <h2>
                    {track.artist.map( (e, index) => (index+1) === track.artist.length? e.name : e.name + ", ")}
                    </h2>
                </div>
                <div className="track-album">
                    <h3>{track.album}</h3>
                </div>
            </div>
        </Link>
    </div>)
}

export default Track;