import React, { Component } from 'react';
import { Grid, Button, Input, Form, List } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { loginUser, fetchUser } from '../../actions/index';
import { connect } from "react-redux";

import './Login.scss';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      token: null,
      email: "",
      password: "",
      errors: {
        email: '',
        password: '',
      },
      userinfo: []
    };
    //binding the method restart. This binding is necessary to make `this` work in the callback
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(email, password) {
    let valid = true;
    let errors = {};
    
    if(!email){
      valid=false;
      errors['email'] = 'Este campo es obligatorio.'
    }
    else{
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( !re.test(email) ) {
        valid=false;
        errors['email'] = 'Debe ingresar un email válido.'
      }else{ //valid email
        if(!password){
          valid=false;
          errors['password'] = 'Este campo es requerido.'
        }
        else {
          if (password.length >= 20){
            valid=false;
            errors['password'] = 'No se permiten mas de 20 caracteres.'
          }
          else{
            if (password.length < 8){
              valid=false;
              errors['password'] = 'Minimo 8 caracteres.'
            }
          }
        }
      }
    }
    this.setState({
      errors: errors
    })   
    return valid;
  }

  onFormSubmit (event){    
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if (this.validateForm(email, password)) {
      let token = this.props.loginUser({"email": email, "password": password});    
      if( token ){
        this.setState({
          token : token
        })
      }
    }
    else console.log("NO VALIDATED FORM")  
  }

  handleChange (event) {    
    const {name, value } = event.target;
    let errors = this.state.errors;
  
    this.setState({ 
      [name] : value,
      errors
     });
  } 

  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props){
      let user = this.props.fetchUser( this.state.email, this.state.token);
      this.setState({
        userinfo: user
      })
    }
    if(prevState.userinfo !== this.state.userinfo){
      this.setState({
        logged: true
      })
    }
  }

  render () { 
    const {errors} = this.state;
    return (
      <Grid textAlign='center'  className= "signContainer">     
            {this.state.logged ?
              <Redirect to={{
                pathname: '/catalog'
              }}/>
              : ""
            }
           <Form success>
              <h2 className="formTitle">¡Bienvenido!</h2>

              <Form.Field required>
                <label>Email</label>
                <Input 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleChange} 
                  type= "email"
                  noValidate
                />
                <span style={{color: "red"}}>{errors["email"]}</span>
              </Form.Field>

              <Form.Field required>
                <label>Contraseña</label>
                <Input 
                  name="password" 
                  type="password"
                  value={this.state.password} 
                  onChange={this.handleChange} 
                  noValidate
                />
                <span style={{color: "red"}}>{errors["password"]}</span>
              </Form.Field>

              <List horizontal>
                <List.Item>
                  <a>¿Olvido su contraseña?</a>
                </List.Item>
                <List.Item>
                  <p>¿Es nuevo en Quiero En Casa? <Link to="/signup">Regístrese gratis</Link> </p>
                </List.Item>
              </List>
              <Grid>
                <Grid.Column textAlign="center">
                  <Button className="signButton" disabled = {false} onClick={this.onFormSubmit} >Ingresar</Button>
                </Grid.Column>
              </Grid> 
            </Form>   
      </Grid> 
    )}
}

const mapDispatchToProps = (dispatch)=> ({
  loginUser: (user) => dispatch(loginUser(user)),
  fetchUser: (email, token) => dispatch(fetchUser(email, token))
});
const mapStateToProps = (state) => {
  return  {
    token: state.login.token,
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Login);