import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { fetchProducts } from '../../actions/index';
import { connect } from "react-redux";

import './Catalog.scss';

class Catalog extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props.token);
    console.log(this.props.name);
    this.props.fetchProducts(this.props.token);
  }

  render () { 
    return (
      <div>
        { this.props.logged == true ? 
          <Grid textAlign='center'  className= "catalogContainer">       
              <h2 className="formTitle">Hola {this.props.name} </h2> 
          </Grid> 
          :
          <Redirect to={{
            pathname: '/login'
          }}/>
        }
      </div>            
    )}
}

const mapDispatchToProps = (dispatch)=> ({
  fetchProducts: (token) => dispatch(fetchProducts(token)),
});
const mapStateToProps = (state) => {
  return  {
    token: state.login.token,
    name: state.userinfo.name,
    products: state.catalog.products,
    logged: state.login.logged,
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Catalog);

