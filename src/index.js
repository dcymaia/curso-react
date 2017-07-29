import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

var  MeuComponente = require('./components/MeuComponente.js');

ReactDOM.render(<MeuComponente />, document.getElementById('app'));
registerServiceWorker();