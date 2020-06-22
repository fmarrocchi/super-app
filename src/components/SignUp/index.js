import React, { Component } from 'react';
import { Grid, Button, Input, Form } from 'semantic-ui-react';
//redux
import { fetchUsers } from '../../actions/index';
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

  componentDidMount() {
    this.props.fetchUsers();
  }

  validateForm() {
    let valid = true;
    let errors = {}
    
    if(!this.state.name){
      valid=false;
      errors['name'] = 'Please complete this field'
    }
      else{
        if(!this.state.phone){
          valid=false;
          errors['phone'] = 'Please complete this field'
        }
          else{
            if(!this.state.email){
              valid=false;
              errors['email'] = 'Please complete this field'
            }
            else{
              if(!this.state.password){
                valid=false;
                errors['password'] = 'Please complete this field'
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

    if (this.validateForm()) {       
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
                <span style={{color: "grey"}}>Debe contener mínimo 6 caracteres.</span>
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
  fetchUsers: () => dispatch(fetchUsers())
});

const mapStateToProps = (state) => {
  return  {
    users: state.users.usersList,
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (SignUp);
