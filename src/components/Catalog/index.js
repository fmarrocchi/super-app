import React, { Component } from 'react';
import { Grid, Segment, Item, Image } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { fetchProducts, fetchCategories, fetchGroups } from '../../actions/index';
import { connect } from 'react-redux';

//images and icons
import commerce from './../../assets/icons/commerce.png';
import Group1 from './../../assets/icons/Group-1.png';
import Group2 from './../../assets/icons/Group-2.png';
import Group3 from './../../assets/icons/Group-3.png';
import Group4 from './../../assets/icons/Group-4.png';
import Group5 from './../../assets/icons/Group-5.png';
import Group6 from './../../assets/icons/Group-6.png';
import Group7 from './../../assets/icons/Group-7.png';
import Group8 from './../../assets/icons/Group-8.png';

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
    this.props.fetchGroups(this.props.token);
  }

  render () { 
    let images = [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8];
    return (  /*  { this.props.logged == true ? 
      :
          <Redirect to={{
          //  pathname: '/login'
          }}/>
        }*/
      <div>      
          <Grid textAlign='center'  className= "catalogContainer">       
              <div className="ui fluid inverted borderless menu">
                <div className="item"> <i class="align justify icon big"></i> </div>
                <a className="item">¡ Hola {this.props.name}!</a>
                <div className="right menu">
                  <div className="item">
                    <div className="ui icon input icon">
                      <input type="text" placeholder="Search..." />
                      <i aria-hidden="true" class="search icon"></i>
                    </div>
                  </div>
                  <div className="item"><img src={commerce}/></div>
                </div>
              </div>
              <Segment className="catalogTitle" textAlign='center'>
                <h3> HACE TU COMPRA POR CATEGORIAS </h3> 
                <h4> Seleccioná tus productos </h4> 
              </Segment>    

              <Segment className="groupList">
              {
              this.props.groups
                .map((group, index) => {
                  return <div                   
                            key={index}
                          >
                            <Image src={images[group.id-1]} circular/>
                            <Link className="titleGroup">{group.name}</Link>
                          </div>
                })    
              }    
              </Segment>     
                                  
          </Grid> 
         
      </div>            
    )}
}

const mapDispatchToProps = (dispatch)=> ({
  fetchProducts: (token) => dispatch(fetchProducts(token)),
  fetchCategories: (token) => dispatch(fetchCategories(token)),
  fetchGroups: (token) => dispatch(fetchGroups(token)),
});
const mapStateToProps = (state) => {
  return  {    
    logged: state.login.logged,
    token: state.login.token,
    name: state.userinfo.name,
    products: state.catalog.products,
    categories: state.catalog.categories,
    groups: state.catalog.groups,
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Catalog);

