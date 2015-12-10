import React, { PropTypes } from 'react';
import Header from './components/Header'
import { Grid } from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <Grid fluid={true}>
        <Header/>
      </Grid>
    );
  }
}

export default App;
