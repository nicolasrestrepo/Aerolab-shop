import React from 'react';
import {Route, Switch } from 'react-router';

import App from './components/App.js'

//containers
import Home from './container/Home';
import History from './container/History';


const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/History" component={History} />
        </Switch>
    </App>


export default AppRoutes;
