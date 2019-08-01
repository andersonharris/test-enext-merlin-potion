import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const element = document.getElementById('root');

ReactDOM.render(<App/>


, element);
serviceWorker.unregister();