import React, { Component } from 'react';
import './SearchBox.css';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleQueryStringChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('Fetch weather data for:', this.state.query);
        this.props.searchSubmit(this.state.query);
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        value={this.state.query}
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