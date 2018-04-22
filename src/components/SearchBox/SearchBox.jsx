import React, { Component } from 'react';
import './SearchBox.css';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryString: ''
        };
    }

    handleQueryStringChange = (e) => {
        this.setState({
            queryString: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('Fetch weather data for:', this.state.queryString);
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSearch}>
                    <input
                        type="search"
                        value={this.state.queryString}
                        name="searchBox"
                        id="searchBox"
                        placeholder="Enter City or Zipcode"
                        onChange={this.handleQueryStringChange} />
                    <span
                        className="search-button fa fa-search"
                        onClick={this.handleSearch}></span>
                </form>
            </div>
        );
    }
}

export default SearchBox;