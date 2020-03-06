import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App.react';
import Login from './components/Login.react';
import * as serviceWorker from './serviceWorker';

import myImport from './util/importUtil'

/**
 * 集成react-router-dom 2020-02-28 17:23:29
 */
import {BrowserRouter as Router, Route} from 'react-router-dom'
myImport('./components')
const router = <Router>
    <App>
        <Route exact path="/" component={Login}/>
    </App>
</Router>

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
