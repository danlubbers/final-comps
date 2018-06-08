import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// This import allows APP to have access to the store and the reducers.
import store from './ducks/store';
// The Provider will 'provide' the store to the APP.
import {Provider} from 'react-redux';
// import HashRouter for routing capabilities
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
// registerServiceWorker();
