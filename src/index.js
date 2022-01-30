import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Reducer} from './redux/reducer'
const store =createStore(Reducer)
ReactDOM.render(
  
   <Provider store={store}>
     <App/>
   </Provider>,
  document.getElementById('root')
);

reportWebVitals();
