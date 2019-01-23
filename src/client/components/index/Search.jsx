import React, { Component } from 'react';
import Content from './Content.jsx';
import Axios from 'axios';
import Loading from '../Loading.jsx';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            dataFound: false,
            searchPerformed: false,
            isSearching: false,
        }

    }

    searchTrack(e) {
        e.preventDefault();
        this.setState({
            isSearching: true,
        })
        console.log("Getting your track");
        let input = document.querySelector("#search-input").value;
        Axios.get("/api/search/track/" + input).then((response) => { 
            this.setState({
                tracks: response.data.tracks.items,
                dataFound: response.data.tracks.items.length > 1? true : false,
                searchPerformed: true,
                isSearching: false,
            });            
         }).catch( (err) => {
             console.log("Error: "+ err);
             this.setState({
                 dataFound: false,
                 searchPerformed: true,
                 isSearching: false,
             })
            });
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
                {this.state.isSearching? <Loading/> : <Content tracks={this.state.tracks} dataFound={this.state.dataFound} searchPerformed={this.state.searchPerformed} />}
            </div>
        )
    }
}

export default Search;