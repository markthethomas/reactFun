import React from 'react';
import SearchForm from './SearchForm'
import {Grid, Input, Button, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Header = () => {
  return (
    <Nav bsStyle="tabs">
      <NavItem>
        <i className="fa fa-newspaper-o fa-2x"></i>
      </NavItem>
      <SearchForm/>
    </Nav>
  );
}
export default Header;