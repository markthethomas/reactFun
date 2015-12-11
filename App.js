import React, {PropTypes} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import {Grid, Col, Row} from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    let sites = [
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }, {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit.'
      }, {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
      }, {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'vitae elit libero, a pharetra augue. Maecenas sed diam eget'
      }, {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'erat a ante venenatis Maecenas sed diam eget'
      }, {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      },
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      },
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      },
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      },
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      },
      {
        url: 'foobar',
        img: 'http://placehold.it/400x400',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
      }
    ];
    console.log(sites);

    return (
      <Grid fluid={true}>
        <Header/>
        <br/>
        <div className="cards">
        {
          sites.map((site) => {
            return (
              <Card className="card" url={site.url} img={site.img} description={site.description}/>
            )
          })
        }
        </div>
      </Grid>
    );
  }
}

export default App;
