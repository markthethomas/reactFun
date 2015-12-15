import React, { PropTypes } from 'react';
import {Image, Button, Panel} from 'react-bootstrap';

class Card extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return (
      <div className={this.props.className}>
        <Panel>
          <h3>{this.props.title}</h3>
          <hr/>
          <Image src="http://placehold.it/300x200" responsive />
          <hr/>
          <p>
            {this.props.description}
          </p>
          <Button>Visit</Button>
        </Panel>
      </div>
    );
  }
}
export default Card
