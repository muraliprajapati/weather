import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import './GraphComponent.css';

class GraphComponent extends Component {
    render() {
        return (
            <div className="graph-container">
                <div className="graph-info">
                    <span><i className="fa fa-arrow-left"></i></span>
                    <span>Temperature variation over 7 days</span>
                    <span><i className="fa fa-arrow-right"></i></span>
                </div>
                <div className="graph">
                    <Sparklines data={this.props.data}>
                        <SparklinesLine color="#fe1743" />
                        <SparklinesSpots style={{ fill: "#ffffff" }} />
                    </Sparklines>
                </div>
            </div>
        );
    }
}

export default GraphComponent;