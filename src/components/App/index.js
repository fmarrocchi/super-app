import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Login from './../Login';
import SignUp from './../SignUp';
import Catalog from './../Catalog';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
    };
    //binding methods. This binding is necessary to make `this` work in the callback
  }

  render() {    
    return (
      <div>
        <Header />
        <BrowserRouter>  
          <Route path="/" exact component={Home} />  
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/catalog" component={Catalog} />
        </BrowserRouter>
        
        <Footer />   
      </div>  
      //ToDo Footer
    )
  }
}
export default App;