import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'

import store from './redux/store';

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <AppRoutes />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
