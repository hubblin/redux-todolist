import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Reset} from 'styled-reset';

import store from './redux/store';
import {Provider} from 'react-redux';




store.subscribe(() => {
  console.log(store.getState());
})
// console.log(store)
// console.log(store.getState());


// store.dispatch(addTodo("ㅎㅇ"));
// store.dispatch(completeTodo(0));


ReactDOM.render(
  <Provider store={store}>
    <Reset/>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
