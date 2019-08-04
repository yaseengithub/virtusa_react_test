/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/


import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import combineReducers from './reducers'
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";

export const store = createStore(
    combineReducers,
    applyMiddleware(thunk, logger)
)
render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)