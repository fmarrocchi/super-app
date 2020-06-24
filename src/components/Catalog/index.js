import React, { Component } from 'react';
import { Grid, Segment, Item, Image, Card } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { fetchProducts, fetchCategories, fetchGroups, fetchSubCategories } from '../../actions/index';
import { connect } from 'react-redux';
import CardCategory from './../CardCategory';

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
    this.state={
      selectedGroup: null,
      selectedCategory: null,
    }

    //bind
    this.onGroupClick = this.onGroupClick.bind(this);
  }

  onGroupClick (e){    
    e.preventDefault();
  }

  componentDidMount() {
    this.props.fetchGroups(this.props.token);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.selectedGroup !== this.state.selectedGroup){
      this.props.fetchCategories(this.props.token, this.state.selectedGroup);
    }

    if(prevState.selectedCategory !== this.state.selectedCategory){
      this.props.fetchSubCategories(this.props.token, this.state.selectedCategory);
    }
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
          <Grid divided="vertically" textAlign='center'  className= "catalogContainer">     

              <div className="ui fluid inverted borderless menu">
                <div className="item"> <i className="align justify icon big"></i> </div>
                <a className="item">¡ Hola {this.props.name}!</a>
                <div className="right menu">
                  <div className="item">
                    <div className="ui icon input icon">
                      <input type="text" placeholder="Search..." />
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </div>
                  <div className="item"><img src={commerce}/></div>
                </div>
              </div>
             
              <Segment className="catalogTitle" textAlign='center'>
                <h3> HACE TU COMPRA POR CATEGORIAS </h3> 
                <h4> Seleccioná tus productos </h4> 
              </Segment>    

              <Segment textAlign='center' className="groupList">
              {
              this.props.groups
                .map((group, index) => { 
                  return <div key={index} onClick={() => {this.setState({selectedGroup: group.id})}}>
                            <Link className="titleGroup" >
                              <Image src={images[group.id-1]}  circular/>
                              {group.name}
                            </Link>
                          </div>
                })    
              }    
              </Segment>   

              <Grid.Row> 
              {
                this.props.categories
                  .map((category, index) => {
                    return <Card                       
                              key={index}
                              className= "categoryCard"
                              onClick={() => {this.setState({selectedCategory: category.id})}}>            
                              {category.name}
                            </Card>
                  })    
                }
              </Grid.Row>

          </Grid> 
         
      </div>            
    )}
}

const mapDispatchToProps = (dispatch)=> ({
  fetchProducts: (token) => dispatch(fetchProducts(token)),
  fetchCategories: (token, id) => dispatch(fetchCategories(token, id)),
  fetchSubCategories: (token, id) => dispatch(fetchSubCategories(token, id)),
  fetchGroups: (token) => dispatch(fetchGroups(token)),
});
const mapStateToProps = (state) => {
  return  {    
    logged: state.login.logged,
    token: state.login.token,
    name: state.userinfo.name,
    products: state.catalog.products,
    categories: state.catalog.categories,
    subcategories: state.catalog.subcategories,
    groups: state.catalog.groups,
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Catalog);

