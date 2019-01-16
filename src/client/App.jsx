import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import IndexPage from './components/index/IndexPage.jsx';
import TrackDetailPage from './components/track/TrackDetailPage.jsx';
import PageNotFound from './components/PageNotFound.jsx';

class App extends Component {
    render() {
        return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/track/:trackId" exact render={(props) => {
                    return <TrackDetailPage trackId={props.match.params.trackId} />;
                }} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
        )
    }
}
export default App;