import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrate(
        <App />,
        document.getElementById('ssr-app')
    ); 
}); 
