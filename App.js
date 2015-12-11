import React, {PropTypes} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import {Grid, Col, Row} from 'react-bootstrap';
import * as request from 'superagent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pins: [{
        url: '',
        img: '',
        description: ''
      }]
    }
  }

  componentDidMount() {
    request
    .get('http://localhost:6700/pins/all')
    .end((err, res) => {
      this.setState({
        pins: res.body
      });
    })
  }

  render () {
    return (
      <Grid fluid={true}>
        <Header/>
        <br/>
        <div className="cards">
        {
          this.state.pins.map((site) => {
            return (
              <Card className="card" url={site.url} description={site.description}/>
            )
          })
        }
        </div>
      </Grid>
    );
  }
}

export default App;
