import React, { Component } from 'react';
import './UnitComponent.css'

class UnitComponent extends Component {

    changeUnit = (e) => {
        const newUnit = e.target.textContent;
        this.props.onUnitChange(newUnit);
    }

    render() {
        return (
            <div className="unit-container">
                <span className={`unit-value ${this.props.unit === 'C' ? 'active-unit' : ''}`} onClick={this.changeUnit}>C</span>
                <span className={`unit-value ${this.props.unit === 'F' ? 'active-unit' : ''}`} onClick={this.changeUnit}>F</span>
            </div>
        );
    }
}

export default UnitComponent;