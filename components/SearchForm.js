import React from 'react';
import {Input, Navbar, Button} from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return(
      <Navbar.Form pullLeft>
        <Input style={{
        minWidth: 300
        }} buttonAfter={<Button type="submit"><i className="fa fa-search"></i></Button>} type="text" placeholder="Search"/>
      </Navbar.Form>
    )
  }
}

export default SearchForm