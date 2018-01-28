import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
