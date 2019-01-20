import React, { Component } from 'react';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.toggleFetureHelp = this.toggleFetureHelp.bind(this);
    }

    toggleFetureHelp() {

    }

    render() {
        return (
            <div
                onClick={this.toggleFetureHelp(props.featureName + '-info')}
                className="feature track-info-text">
                <div className="feature-name-container">
                    <h1 className="feature-name">{props.featureName}</h1>
                </div>
                <div className="feature-level-container">
                    <div className="feature-level centered-container" style={{ width: " 0%" }}>
                        <h2>{props.percentage}</h2>
                    </div>
                    <i className="fas fa-chevron-circle-down" />
                </div>
                <div id={props.featureName + "-info"} className="feature-help" hidden>
                    <p>
                        Danceability describes how suitable a track is for dancing based
                        on a combination of musical elements including tempo, rhythm
                        stability, beat strength, and overall regularity. A value of 0
                        is least danceable and 100 is most danceable.
            </p>
                </div>
            </div>
        )
    }
}

export default Feature;