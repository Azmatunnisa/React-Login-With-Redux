import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import LoginForm from '../LoginForm/LoginForm';
import DashBoard from '../DashBoard/DashBoard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
         
            <Route path='/'  exact={true} component={LoginForm} />
            <Route path='/dashboard' component={DashBoard} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;