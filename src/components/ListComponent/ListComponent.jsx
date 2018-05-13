import React, { Component } from 'react';
import './ListComponent.css';
import { getIconClassName } from '../../utils/utils';

const SingleListItem = (props) => {
    const { day, weatherId, description, mainTemperature } = props.data;
    const iconClass = getIconClassName(weatherId);

    return (
        <div className="single-list-item">
            <div className="li-info-container">
                <div className="li-day">
                    {day}
                </div>
                <div className="li-temp-text">{mainTemperature}&#x00B0;</div>
                <div className="li-desc">{description}</div>
            </div>
            <div className="li-weather-icon">
                <i className={`wi wi-owm-${weatherId} ${iconClass}`}></i>
            </div>
        </div>
    );
}

class ListComponent extends Component {
    render() {
        const items = this.props.data.map(singleDayData => (<SingleListItem key={singleDayData.day} data={singleDayData} />))
        return (
            <div className="list-container">
                {items}
            </div>
        );
    }
}

export default ListComponent;
