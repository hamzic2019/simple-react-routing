import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about'


class AppRouters extends Component {
  render(){
    return(
      <BrowserRouter> 
        <Header />
        <Switch> 
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
} 

export default AppRouters;