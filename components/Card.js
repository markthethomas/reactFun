import React, { PropTypes } from 'react'
import {Image, Panel} from 'react-bootstrap';

class Card extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return (
      <div className={this.props.className}>
        <Panel>
          <h2>{this.props.title}</h2>
          <Image src={this.props.img} responsive />
          <p>
            {this.props.description}
          </p>
        </Panel>
      </div>
    );
  }
}
export default Card
