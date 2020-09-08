import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class AppRouters extends Component {
  render(){
    return(
      <BrowserRouter> 
        <Switch> 
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouters;