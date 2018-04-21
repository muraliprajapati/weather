import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const ROOT_NODE = document.getElementById('root');

const HelloWorld = (props) => {
    return (
        <div><p>Simple Weather App</p></div>
    )
}

ReactDOM.render(<HelloWorld />, ROOT_NODE);