import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

console.log('app');
ReactDOM.hydrate(
    <App/>,
    document.getElementById('root')
);