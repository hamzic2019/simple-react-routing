import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';


class Header extends Component {
  render(){
    return(
      <div>
        COMPANY LOGO
        <NavLink to="/" activeClassName="active" exact={true} > Home </NavLink>
        <NavLink to="/about" activeClassName="active" >About </NavLink>
        <hr />
      </div>
    );
  }
}

export default Header;