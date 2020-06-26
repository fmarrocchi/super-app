import React, { Component } from 'react';
import { Grid, Segment, Input, Responsive, Image, Card, Menu } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { fetchProducts, fetchCategories, fetchGroups, fetchSubCategories, fetchProductsFilterbySubCat, buyProduct } from '../../actions/index';
import { connect } from 'react-redux';
import Product from './../Product';

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
import cat1 from './../../assets/images/categories/cat_1.jpg';
import cat2 from './../../assets/images/categories/cat_2.jpg';
import cat3 from './../../assets/images/categories/cat_3.jpg';
import cat4 from './../../assets/images/categories/cat_4.jpg';
import cat5 from './../../assets/images/categories/cat_5.jpg';
import cat6 from './../../assets/images/categories/cat_6.jpg';
import cat7 from './../../assets/images/categories/cat_7.jpg';
import cat8 from './../../assets/images/categories/cat_8.jpg';
import cat9 from './../../assets/images/categories/cat_9.jpg';
import cat10 from './../../assets/images/categories/cat_10.jpg';
import cat11 from './../../assets/images/categories/cat_11.jpg';
import cat12 from './../../assets/images/categories/cat_12.jpg';
import cat13 from './../../assets/images/categories/cat_13.jpg';
import cat14 from './../../assets/images/categories/cat_14.jpg';
import cat15 from './../../assets/images/categories/cat_15.jpg';
import cat16 from './../../assets/images/categories/cat_16.jpg';
import cat17 from './../../assets/images/categories/cat_17.jpg';
import cat18 from './../../assets/images/categories/cat_18.jpg';
import cat19 from './../../assets/images/categories/cat_19.jpg';
import cat20 from './../../assets/images/categories/cat_20.jpg';
import cat21 from './../../assets/images/categories/cat_21.jpg';
import cat22 from './../../assets/images/categories/cat_22.jpg';
import cat23 from './../../assets/images/categories/cat_23.jpg';
import cat24 from './../../assets/images/categories/cat_24.jpg';
import cat25 from './../../assets/images/categories/cat_25.jpg';
import cat26 from './../../assets/images/categories/cat_26.jpg';
import cat27 from './../../assets/images/categories/cat_27.jpg';
import cat28 from './../../assets/images/categories/cat_28.jpg';

import './Catalog.scss';

class Catalog extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedGroup: null,
      selectedCategory: null,
      selectedSubCategory: null,
      cart: []
    }
    //bind methods
    this.onGroupClick = this.onGroupClick.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onGetProducts = this.onGetProducts.bind(this);
    this.onBuyProduct = this.onBuyProduct.bind(this);
    this.onGetSubcatProducts = this.onGetSubcatProducts.bind(this);
  }

  onGroupClick (e){    
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    this.setState({
      selectedGroup: id,
      selectedCategory: null,
      selectedSubCategory: null,
    })
  }

  onGetProducts (e){    
    e.preventDefault();
    const cat = e.currentTarget.dataset.cat;   
    this.setState({
      selectedCategory: cat,
      selectedSubCategory: null
    })
    console.log("busco todos")    
  }

  onGetSubcatProducts (e){    
    e.preventDefault();
    const cat = e.currentTarget.dataset.cat;
    const subcat = e.currentTarget.dataset.subcat;  
    console.log("tengo filtro cat:"+ cat +" subcat: "+ subcat);     
    this.setState({
      selectedCategory: cat,
      selectedSubCategory: subcat
    })
  }

  onSelectCategory (e){    
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    this.setState({
      selectedCategory: id
    })
  }

  onBuyProduct(product){
    if (this.props.buyProduct(product)){
      let newCart = [...this.state.cart, product.name]
      this.setState({
        cart : newCart
      })    
      console.log("carrito "+ this.state.cart);
    }
    
  }

  componentDidMount() {
    if (!this.props.logged){
      this.props.history.push('/login')
    }else{
      this.props.fetchGroups(this.props.token); 
    }
    
  }

  componentDidUpdate(prevProps, prevState){
    if (! this.props.logged){
      this.props.history.push('/login')
    }
    if(prevState.selectedGroup !== this.state.selectedGroup){
      this.props.fetchCategories(this.props.token, this.state.selectedGroup);
    }

    if(prevState.selectedCategory !== this.state.selectedCategory && this.state.selectedCategory !== null){
      this.props.fetchSubCategories(this.props.token, this.state.selectedCategory);
      this.props.fetchProducts(this.state.selectedCategory, this.props.token);
    }

    if(prevState.selectedSubCategory !== this.state.selectedSubCategory && this.state.selectedSubCategory !== null){
      this.props.fetchProductsFilterbySubCat(this.state.selectedCategory, this.state.selectedSubCategory, this.props.token)
    }
  }

  render () {     
    let images = [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8];
    let categoryImg = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19, cat20, cat21, cat22, cat23, cat24, cat25, cat26, cat27, cat28 ];
    
    return (  /*  { this.props.logged == true ? 
      :
          <Redirect to={{
          //  pathname: '/login'
          }}/>
        }*/
      <div>      
          <Grid divided="vertically" textAlign='center' className= "catalogContainer" >     
              <Menu compact className="ui fluid inverted borderless menu">
                <Menu.Item className="item"> <i className="align justify icon big"></i> </Menu.Item>
                <Menu.Item className="item">¡ Hola {this.props.userinfo.name}!</Menu.Item>
                <Menu.Item className="right menu">
                  <div className="item">
                    <Responsive className="ui icon input icon">
                      <Responsive as={Input} type="text" placeholder="Search..." />
                      <i aria-hidden="true" className="search icon"></i>
                    </Responsive>
                  </div>
                  <Menu.Item ref={this.contextRef} className="item"><img src={commerce}/></Menu.Item>
                </Menu.Item>
              </Menu>
             
              <Segment className="catalogTitle" textAlign='center'>
                <h3> HACE TU COMPRA POR CATEGORIAS </h3> 
                <h4> Seleccioná tus productos </h4> 
              </Segment>    

              <Segment textAlign='center' className="groupList">
               {
              this.props.groups
                .map((group, index) => { 
                  return <div id="group" className="group" key={index} data-id={group.id}  onClick={this.onGroupClick} >
                            <a className="titleGroup" >
                              <Image src={images[group.id-1]}  circular/>
                              <label>{group.name} </label>
                            </a>
                          </div>
                })    
              }      
             </Segment> 
          </Grid>

        <Card.Group className="categoriesContainer">
          {
            this.props.categories
              .map((category, index) => {
                return <Card                       
                          key={index}
                          className= "categoryCard"
                          data-id={category.id}  
                          onClick={this.onSelectCategory} 
                          style={{ backgroundImage:`url(${categoryImg[category.id -1]})` }}>  
                          {
                            this.state.selectedCategory == category.id ?
                            <div className="subcatInfo"> 
                              {this.props.subcategories
                                .map((subcategory, index) => {
                                  return <div key={index}> <a className="subcatInfoText" data-subcat={subcategory.id} data-cat={category.id} onClick={this.onGetSubcatProducts} > {subcategory.name} </a> </div>
                                })  }   
                              <a className="subcatInfoText" onClick={this.onGetProducts} >Todos</a> 
                            </div>                             
                            :
                            <label className="categoryName">{category.name}</label>
                          }  
                        </Card>
              })    
            }
          </Card.Group>      

          <Card.Group className="productsContainer">  
          {
            this.props.products
              .map((product, index) => { 
                return <Product 
                          key={index} 
                          product={product}
                          onBuyProduct = {()=> this.onBuyProduct(product)} 
                       />
            })    
          }            
          </Card.Group>
      </div>     
    )}
}

const mapDispatchToProps = (dispatch)=> ({
  fetchProducts: (cat, token) => dispatch(fetchProducts(cat, token)),
  fetchCategories: (token, id) => dispatch(fetchCategories(token, id)),
  fetchSubCategories: (token, id) => dispatch(fetchSubCategories(token, id)),
  fetchGroups: (token) => dispatch(fetchGroups(token)),
  buyProduct: (product) => dispatch(buyProduct(product)),
  fetchProductsFilterbySubCat: (cat, subcat, token) => dispatch(fetchProductsFilterbySubCat(cat,subcat,token)),
});
const mapStateToProps = (state) => {
  return  {    
    logged: state.login.logged,
    token: state.login.token,
    user: state.userinfo.userinfo.name,
    products: state.catalog.products,
    categories: state.catalog.categories,
    subcategories: state.catalog.subcategories,
    groups: state.catalog.groups,
    userinfo: state.userinfo.userinfo,
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Catalog);

