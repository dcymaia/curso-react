import React from 'react';
import ReactDOM from 'react-dom';
import MeuComponente from './components/MeuComponente';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
registerServiceWorker();