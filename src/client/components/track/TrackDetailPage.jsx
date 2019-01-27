import React, { Component } from 'react';
import BackgroundImageContainer from './BackgroundImageContainer.jsx';
import TrackDetailContainer from './TrackDetailContainer.jsx';
import Footer from '../Footer.jsx';
import Loading from '../Loading.jsx';
import Axios from 'axios';

class TrackDetailPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      track: {},
      trackFeatures: {},
    };
  }

  componentDidMount(){
    Axios.get('/api/track/' + this.props.trackId).then( (data) => {
      this.setState({
        track: data,
        isLoading: false
      });
    });
  }
  render() {

    if(this.state.isLoading){
      return <Loading/>;
    }
    return (
      <div>
        <BackgroundImageContainer track={this.state.track}/>
        <TrackDetailContainer track={this.state.track}/>
        <Footer />
      </div>
    );
  }
}

export default TrackDetailPage;
