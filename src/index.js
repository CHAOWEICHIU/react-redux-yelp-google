import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Search from './components/search'
import reducers from './reducers';


import { Router, Route, hashHistory, IndexRoute } from 'react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers ,composeEnhancers(applyMiddleware()))


const Location = () => <div>Need to access currentl location</div>
const Collection = () => <div>Collection</div>


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Location} />
        <Route path="search" component={Search} />
        <Route path="collection" component={Collection} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
