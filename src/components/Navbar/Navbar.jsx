import React, { Component } from 'react';
import './Navbar.css';
import SearchBox from '../SearchBox';
import UnitComponent from '../UnitComponent';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendNewUnitToParent = (newUnit) => {
        this.props.changeUnit(newUnit);
    }

    sendQueryStringToParent = (query) => {
        this.props.searchSubmit(query);
    }

    render() {
        return (
            <nav>
                <ul className="navbar-container">
                    <li className="navbar-list-item">
                        <SearchBox searchSubmit={this.sendQueryStringToParent} />
                    </li>
                    <li className="navbar-list-item city-name">
                        <span>{this.props.data.city}</span>
                    </li>
                    <li className="navbar-list-item">
                        <UnitComponent unit={this.props.unit} onUnitChange={this.sendNewUnitToParent} />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;