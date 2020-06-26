import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Login from './../Login';
import SignUp from './../SignUp';
import Catalog from './../Catalog';

class App extends React.Component {
  render() {    
    return (
      <div>
        <Header />
        <BrowserRouter>  
          <Switch>
            <Route path="/" exact component={Home} />  
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/catalog" component={Catalog} />
          </Switch>                 
        </BrowserRouter>        
        <Footer />   
      </div>  
    )
  }
}
export default App;