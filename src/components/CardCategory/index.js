import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'semantic-ui-react';

import './CardCategory.scss';

export default class CardCategory extends Component {
  render () {    
    return (
      <Card onClick={this.props.onCardClick} />     
    )    
  }
};
