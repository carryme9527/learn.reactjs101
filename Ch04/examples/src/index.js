import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './HelloMessage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
registerServiceWorker();
