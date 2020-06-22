import React, { Component }  from 'react';
import {Card } from 'semantic-ui-react';
import Feature from './../Feature';
import './Features.scss';

export default class Features extends Component{
  render() { 
    return (      
      <Card.Group centered className="featContainer"> 
      {
        this.props.features
          .map((feature, index) => {
            return <Feature 
              key={index}
              name={feature.name} 
              description={feature.description} 
              urlImage={feature.urlImage}
            />;
          })    
        }
        </Card.Group>
    );
  }
}
