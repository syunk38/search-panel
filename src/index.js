import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import searchConditions from './reducers'
import { createStore } from 'redux'

const store = createStore(searchConditions);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#content')
);
