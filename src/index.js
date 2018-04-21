import React from 'react';
import ReactDOM from 'react-dom';

const ROOT_NODE = document.getElementById('root');

const HelloWorld = (props) => {
    return (
        <div>Simple Weather App</div>
    )
}

ReactDOM.render(<HelloWorld />, ROOT_NODE);