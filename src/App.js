import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Proveedores from './components/Proveedores';
import NuevoUsuario from './components/NuevoUsuario'; 
import Articulos from './components/Articulos';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Dashboard from './components/Dashboard';

//HOLA PROBANDO
class App extends Component {
  render(){
    return (
    <Router>
      <div className="root">
        <CssBaseline />
        <ButtonAppBar/>
        <Switch>
          <Route path="/dash" component={Dashboard}/>
          <Route path="/addarticle" component={Articulos}/>
          <Route path="/articles" component={Dashboard}/>
          <Route path="/addprovider" component={Proveedores}/>
          <Route path="/providers" component={Dashboard}/>
          <Route path="/addmovement" component={Dashboard}/>
          <Route path="/movements" component={Dashboard}/>
          <Route path="/inventoryvalue" component={Dashboard}/>
          <Route path="/restock" component={Dashboard}/>
          <Route path="/inactivity" component={Dashboard}/>
          <Route path="/articlelist" component={Dashboard}/>
          <Route path="/movementlist" component={Dashboard}/>
          <Route path="/addnewuser" component={NuevoUsuario}/>
          <Route path="/users" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;
