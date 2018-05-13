import React, { Component } from 'react';
import Navbar from '../Navbar';
import TodayComponent from '../TodayComponent';
import ListComponent from '../ListComponent';
import GraphComponent from '../GraphComponent';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: 'C',
            queryString: '',
            latLng: [],
            navbarData: {}, //this
            todayComponentData: {},
            listComponentData: [],
            graphComponentData: []
        };
    }

    componentDidMount() {
        const geolocation = navigator.geolocation;
        if (geolocation) {
            geolocation.getCurrentPosition((position) => {
                this.setState({
                    latLng: [position.coords.latitude, position.coords.longitude]
                }, this.notifyStateChange)
            }, () => {
                console.log('Permission Denied');
            });
        } else {
            console.log('GeoLocation not supported...Update the browser fella');
        }
    }

    onUnitChange = (newUnit) => {
        this.setState({
            unit: newUnit
        }, this.notifyStateChange) //this
    }

    onSearchSubmit = (query) => {
        this.setState({
            queryString: query,
            latLng: []
        }, this.notifyStateChange) //this
    }

    notifyStateChange = () => {
        const hasLatLng = this.state.latLng.length > 0;
        const hasCityOrZipcode = (this.state.queryString !== '');

        if (hasLatLng || hasCityOrZipcode) {
            this.fetchWeatherForecast(hasLatLng).then(forecastData => {
                // console.log('Forecast Data:', forecastData);
                // Extract component specific data...
                const navbarData = this.extractDataForNavbar(forecastData);
                const todayComponentData = this.extractDataForTodayComponent(forecastData);
                const { listComponentData, graphComponentData } = this.extractDataForListAndGraphComponent(forecastData);

                this.setState({
                    navbarData,
                    todayComponentData,
                    listComponentData,
                    graphComponentData
                })

            }).catch(error => {
                console.log('Error:', error);
            });
        }
    }

    fetchWeatherForecast = (hasLatLng) => {
        const API_KEY = '789c7a808690dc32dbf1324ad4b2e1e3';
        const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
        const queryParams = (hasLatLng) ? `lat=${this.state.latLng[0]}&lon=${this.state.latLng[1]}` : `q=${this.state.queryString}`;
        const unitType = (this.state.unit === 'C') ? 'metric' : 'imperial';

        const url = `${BASE_URL}?${queryParams}&units=${unitType}&cnt=7&appid=${API_KEY}`;

        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            console.log('Error:', error);
        })
    }

    extractDataForNavbar = (forecastData) => {
        return {
            city: `${forecastData.city.name}, ${forecastData.city.country}`
        };
    }

    extractDataForTodayComponent = (forecastData) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const todayForecast = forecastData.list[0];

        const time = new Date(todayForecast.dt * 1000);
        const day = this.getDay(time);
        const date = `${monthNames[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`

        const weatherId = todayForecast.weather[0].id;
        const description = todayForecast.weather[0].description;

        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        let mainTemperature = (isDayTime) ? todayForecast.temp.day : todayForecast.temp.night;
        mainTemperature = Math.round(mainTemperature);
        const minTemperature = Math.round(todayForecast.temp.min);
        const maxTemperature = Math.round(todayForecast.temp.max);

        const pressure = todayForecast.pressure;
        const humidity = todayForecast.humidity;
        const windSpeed = todayForecast.speed;

        return {
            day,
            date,
            weatherId,
            description,
            mainTemperature,
            minTemperature,
            maxTemperature,
            pressure,
            humidity,
            windSpeed
        }
    }

    extractDataForListAndGraphComponent = (forecastData) => {
        const listComponentData = [];
        const graphComponentData = [];

        forecastData.list.forEach(forecast => {
            let item = {};
            item.day = this.getDay(forecast.dt * 1000);
            item.weatherId = forecast.weather[0].id;
            item.description = forecast.weather[0].description;
            item.mainTemperature = Math.round(forecast.temp.day);

            listComponentData.push(item);
            graphComponentData.push(forecast.temp.day)
        });

        // Remove first element as that represents today's weather
        listComponentData.shift();

        return {
            listComponentData,
            graphComponentData
        }
    }

    // Takes date object or unix timestamp in ms and returns day string
    getDay = (time) => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday"];
        return dayNames[(new Date(time).getDay())];
    }

    render() {
        const hasLatLng = this.state.latLng.length > 0;
        const hasCityOrZipcode = (this.state.queryString !== '');
        const shouldRenderApp = hasLatLng || hasCityOrZipcode;

        const instructionLayout = <div className="app-instruction">
            <p>Allow Location Access or type city name/zip code in search area to get started.</p>
        </div>

        const mainAppLayout = <React.Fragment>
            <div className="app-today">
                <TodayComponent data={this.state.todayComponentData} unit={this.state.unit} />
            </div>
            <div className="app-list-graph">
                <ListComponent data={this.state.listComponentData} />
                <GraphComponent data={this.state.graphComponentData} />
            </div>
        </React.Fragment>

        return (
            <div className="app-container">
                <div className="app-nav">
                    <Navbar
                        searchSubmit={this.onSearchSubmit}
                        changeUnit={this.onUnitChange}
                        unit={this.state.unit}
                        data={this.state.navbarData}
                    />
                </div>
                {shouldRenderApp ? mainAppLayout : instructionLayout}
            </div>
        );
    }
}

export default App;