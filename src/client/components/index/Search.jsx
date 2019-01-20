import React, { Component } from 'react';
import Content from './Content.jsx';
import Axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }

    }

    searchTrack(e) {
        e.preventDefault();
        console.log("Getting your track");
        let input = document.querySelector("#search-input").value;
        Axios.get("/api/search/track/" + input).then((response) => { 
            this.setState({
                tracks: response.data.tracks.items
            });            
         }).catch( (err) => {console.log("Error: "+ err)});
    }

    render() {
        return (
            <div id="search-container">
                <div id="search-form-container">
                    <form onSubmit={this.searchTrack.bind(this)}>
                        <input id="search-input" name="track" type="text" placeholder="Name a track"></input>
                        <button id="search-button" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <Content tracks={this.state.tracks} />
            </div>
        )
    }
}

export default Search;