import React, { Component } from 'react';
import { Grid, Button, Input, Form } from 'semantic-ui-react';
//redux
//import {  } from '../../actions/index';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import './../Login/Login.scss';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
      errors: {
        name: '',
        phone: '',
        email: '',
        password: '',
      }
    };
    //binding the method restart. This binding is necessary to make `this` work in the callback
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(name, phone, email, password) {
    let valid = false;
    let errors = {};
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!name){
      errors['name'] = 'El campo es obligatorio.'
    }
    else{
      if(name.length>60){
        errors['name'] = 'No se permiten más de 60 caracteres.'
      }
      else{
        if (name.length < 5){
          errors['name'] = 'Debe ingresar al menos 5 caracteres.'
        } //chequear alphabetic name
          else{
            if(!phone){
              errors['phone'] = 'Please complete this field'
            }
            else{
              if(!email) {
                errors['email'] = 'Please complete this field'
            }
            else{
              if (!re.test(email)){
                errors['email'] = 'Debe ingresar un email válido.'
              }
              else{
                if(!password){
                  errors['password'] = 'Este campo es requerido.'
                }
                else{
                  if (password.length >= 20){
                    valid=false;
                    errors['password'] = 'No se permiten mas de 20 caracteres.'
                  }
                  else{
                    if (password.length < 8){
                      valid=false;
                      errors['password'] = 'Minimo 8 caracteres.'
                    }
                    else{
                      valid=true
                    }
                  }            
                }
              }
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
    const { name } = this.state;
    let phone = this.state.phone;
    let email = this.state.email;
    let password = this.state.password;

    if (this.validateForm(name, phone, email, password)) {       
      this.setState( { 
        name:"", 
        phone:"", 
        email:"", 
        password:""
      });
      console.log("form validated crear usuario");
    }
    else console.log("NO VALIDATED FORM")  
  }

  handleChange (event) {    
    event.preventDefault();
    const {name, value } = event.target;
    let errors = this.state.errors;
  
    this.setState({ 
      [name] : value,
      errors
     });
  } 

  render () { 
    const {errors} = this.state;
    console.log(this.props.users);
    return (
      <Grid textAlign='center'  className= "signContainer">             
           <Form success onSubmit={this.onFormSubmit}>
              <h2 className="formTitle">Registrarme</h2>

              <Form.Field required>
                <label>Nombre y Apellido</label>
                <Input 
                  name="name" 
                  value={this.state.name} 
                  onChange={this.handleChange} 
                  noValidate
                />
                <span style={{color: "red"}}>{errors["name"]}</span>
              </Form.Field>
              
              <Form.Field required>
                <label>Teléfono</label>
                <Input 
                  name="phone" 
                  value={this.state.phone} 
                  onChange={this.handleChange} 
                  noValidate
                />
                <span style={{color: "red"}}>{errors["phone"]}</span>
              </Form.Field>
              
              <Form.Field required>
                <label>Email</label>
                <Input 
                  name="email" 
                  value={this.state.email} 
                  onChange={this.handleChange} 
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
                <span style={{color: "grey", fontStyle: "italic"}}>Debe contener mínimo 6 caracteres.</span>
                <span style={{color: "red"}}>{errors["password"]}</span>
              </Form.Field>

              <Link to="/login">
                <Button basic color='black' floated='left' className="cancelButton">Cancelar</Button>
              </Link>
              <Button type="submit" className="signButton" floated='right'>Registrarme</Button>
                         
            </Form>   
      </Grid> 
    )}
}

const mapDispatchToProps = (dispatch) => ({
});
export default connect (null, mapDispatchToProps) (SignUp);
