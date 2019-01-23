import React, { Component } from 'react';
import featureDescription from '../../Constants';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.toggleFetureHelp = this.toggleFetureHelp.bind(this);
        this.state = {
            isBarFilled: false,
            barMaxValue: this.props.percentage,
            barCurrentValue: this.props.percentage < 10? 10 : 0
        }
    }

    toggleFetureHelp(id) {
        let featureHelpBox = document.getElementById(id);

        featureHelpBox.hidden = !featureHelpBox.hidden;

        let arrow = featureHelpBox.parentElement.querySelector("i");
        arrow.classList.toggle("fa-chevron-circle-down");
        arrow.classList.toggle("fa-chevron-circle-up");

    }

    componentDidMount(){
        this.animation = setInterval( () => {this.setState({barCurrentValue: this.state.barCurrentValue+1})}, 10);
    }

    componentDidUpdate(){
        if(this.state.barCurrentValue >= this.state.barMaxValue)
        {
            clearInterval(this.animation);
        }
    }

    render() {
        return (
            <div
                onClick={() => this.toggleFetureHelp(this.props.featureName + '-info')}
                className="feature track-info-text">
                <div className="feature-name-container">
                    <h1 className="feature-name">{this.props.featureName}</h1>
                </div>
                <div className="feature-level-container">
                    <div className="feature-level centered-container" style={{width: this.state.barCurrentValue + "%" }}>
                        <h2>{this.props.percentage + "%"}</h2>
                    </div>
                    <i className="fas fa-chevron-circle-down" />
                </div>
                <div id={this.props.featureName + "-info"} className="feature-help" hidden>
                    <p>
                        {featureDescription[this.props.featureName]}
            </p>
                </div>
            </div>
        )
    }
}

export default Feature;