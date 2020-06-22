import React, { Component } from 'react';
import {Card, Image } from 'semantic-ui-react';
import './Feature.scss';

export default class Feature extends Component {
  render () { 
    return (
      <Card className="featureCard">
        <Image className="imageCard" src={this.props.urlImage} centered wrapped />
        <Card.Content textAlign='center' className="featureCardContent">
          <b className="featureTitle">{this.props.name}</b>
          <Card.Description className="descriptionText">
            {this.props.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )    
  }
};


