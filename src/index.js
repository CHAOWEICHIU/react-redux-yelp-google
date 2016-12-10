import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import Search from './containers/search'
import Collection from './containers/collection'
import store from './store'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="search" component={Search} />
        <Route path="collection" component={Collection} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'))
