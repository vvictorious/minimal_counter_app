import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

//store

// actions

const increment = () => {
  return {
    type: 'INCREMENT',

  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// reducer

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state +1
    case 'DECREMENT':
      return state - 1
  }
}

let store = createStore(counter)

//display it in console

// dispatch



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
