import React, { Component } from 'react';
import { Image, Card, Popup } from 'semantic-ui-react';
import './Product.scss';
import notFoundImage from './../../assets/images/notfound.jpg';
 
const timeoutLength = 2500;
class Product extends Component {
  state = {isOpen: false};

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    const { id } = this.props.product;
    try {
      const imageUrl = require(`./../../assets/images/products/prod_${id}.jpg`);
        return imageUrl;
    } catch (error) {
        return notFoundImage;
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }
  
  render () { 
    return ( 
      <Card className= "productCard">
        <Image src={this.loadImage()} />
        <h2 className="priceLabel">
          ${this.props.product.currentPrice} 
          <strike>{this.props.product.normalPrice}</strike>
        </h2>
        <Card.Description>
          {this.props.product.name}
        </Card.Description>
        <Card.Content extra>

          {this.props.product.stock >0 ?
            <Popup
              trigger={<a className="buyButton" onClick={this.props.onBuyProduct}> COMPRAR </a>}
              content={`${this.props.product.name} AGREGADO!`}
              on='click'
              open={this.state.isOpen}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              position='top center'
              basic
              size='small'
              offset='0, 20px'
            />            
            :
            <label className="outStock"> SIN STOCK </label>
          }        
        </Card.Content> 
      </Card>    
    )}
}
 
export default Product;



