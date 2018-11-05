import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FrontPage from './pages/index_page'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={FrontPage}/>
                </Switch>
            </div>
        </BrowserRouter>
        </Provider>
    , document.querySelector('.container'));
serviceWorker.unregister();
if (module.hot) module.hot.accept();
