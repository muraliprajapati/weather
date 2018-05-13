import React, { Component } from 'react';
import './TodayComponent.css';
import { getIconClassName } from '../../utils/utils';

class TodayComponent extends Component {

    render() {
        const {
            day, date,
            weatherId, description,
            mainTemperature, minTemperature, maxTemperature,
            pressure, humidity, windSpeed } = this.props.data;

        const { unit } = this.props;

        const iconClass = getIconClassName(weatherId);
        const windSpeedUnit = (unit === 'C') ? 'm/s' : 'miles/hr';

        return (
            <div className="today-component-container">
                <div className="date-container">
                    <div>{day}</div>
                    <div>{date}</div>
                </div>

                <div className="icon-desc-container">
                    <div className="icon-conatainer">
                        <i className={`wi wi-owm-${weatherId} weather-icon ${iconClass}`} ></i>
                    </div>
                    <div className="weather-desc">{description}</div>
                </div>

                <div className="temp-container">
                    <div className="temp-text">
                        <span>{mainTemperature}</span>
                        <i className="wi wi-degrees"></i>
                    </div>
                    <div className="high-low-container">
                        <div className="high-low-item">
                            <span>
                                <i className="wi wi-direction-up" ></i>
                            </span>
                            <span>Max</span>
                            <span>
                                <span>{maxTemperature}&#x00B0;</span>
                            </span>
                        </div>
                        <div className="high-low-item">
                            <span>
                                <i className="wi wi-direction-down" ></i>
                            </span>
                            <span>Min</span>
                            <span>
                                <span>{minTemperature}&#x00B0;</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="extra-info-container">
                    <div className="extra-info-item">
                        <span><i className="wi wi-humidity"></i></span>
                        <span>Humidity</span>
                        <span>{humidity}%</span>
                    </div>
                    <div className="extra-info-item">
                        <span><i className="wi wi-barometer"></i></span>
                        <span>Pressure</span>
                        <span>{pressure} hPa</span>
                    </div>
                    <div className="extra-info-item">
                        <span><i className="wi wi-strong-wind"></i></span>
                        <span>Wind Speed</span>
                        <span>{windSpeed} {windSpeedUnit}</span>
                    </div>
                </div>
            </div >
        );
    }
}

export default TodayComponent;