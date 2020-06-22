import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
//import { Link, Redirect } from 'react-router-dom';
//import {  } from '../../actions/index';
import { connect } from "react-redux";

import './Catalog.scss';

class Catalog extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      logged: this.props.logged
    };
  }
  render () { 
    return (
      <Grid textAlign='center'  className= "catalogContainer">       
           <h2 className="formTitle">Hola {this.state.name}</h2> 
      </Grid> 
    )}
}
export default Catalog;
/*const mapDispatchToProps = (dispatch)=> ({
});
export default connect (null, mapDispatchToProps) (Catalog);*/