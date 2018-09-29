import React from 'react';
import ReactDOM from 'react-dom';
import './index-src/index.css';
import WebPage from './WebPage';
import registerServiceWorker from './index-src/registerServiceWorker';

ReactDOM.render(<WebPage />, document.getElementById('root'));
registerServiceWorker();
