import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';
import './Header.scss';

//images
import background from './../../../assets/images/background.png';
import iconWhite from './../../../assets/icons/logo-white.png';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {      
    };
    
  }

  render () {   
    return (
      <div>
        <div className="header" style={{ backgroundImage:`url(${background})` }} >
          <Image src={iconWhite} className="headerIcon" verticalAlign='top' floated='right'/>
        </div>   
      </div>
    )}
}

export default Header;