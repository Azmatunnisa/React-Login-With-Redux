import React from 'react';
import ReactDOM from 'react-dom';
//import LoginForm from './components/LoginForm/LoginForm';
//import DashBoard from './components/DashBoard/DashBoard';
import App from './components/container/App';


import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  
  <Provider store={store}>
   
  <App/>
  
  </Provider>,
  
  document.getElementById('root')
);
