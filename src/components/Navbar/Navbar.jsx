import React, { Component } from 'react';
import './Navbar.css';
import SearchBox from '../SearchBox';
import UnitComponent from '../UnitComponent';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav>
                <ul className="navbar-container">
                    <li className="navbar-list-item navbar-search-box">
                        <SearchBox />
                    </li>
                    <li className="navbar-list-item">
                        <UnitComponent />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;