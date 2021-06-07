import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise';

// Our Reducers
import NotebookTable from './store/reducers/NotebookTable'
import TelephoneTable from './store/reducers/TelephoneTable';
import User from './_reducers/user_reducer'

const rootReducer = combineReducers({
  notebookTable: NotebookTable,
  telephoneTable: TelephoneTable,
  User
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
