import React, { Component } from 'react';
import TrackMainInfo from './TrackMainInfo.jsx';
import TrackFeatures from './TrackFeatures.jsx';
import Loading from '../Loading.jsx';
import Axios from 'axios';

class TrackDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            featureData: []
        }
    }

    componentDidMount() {
        console.log("Data container loaded: ",this.props);
        Axios.get("/api/track/" + this.props.track.data.id + "/features").then((data) =>{
            this.setState({
                isLoading: false,
                featureData: data
            })
        })
    }

    render() {
        return (
            <main id="track-data-container">
                <TrackMainInfo trackInfo = {this.props.track} />
                {this.state.isLoading? <Loading/> : <TrackFeatures features={this.state.featureData}/>}
            </main>
        )
    }
}

export default TrackDetail;