import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Dashboard from './components/Dashboard';
import Tester from './Test';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
          <Route path="/addarticle" component={Dashboard}/>
          <Route path="/articles" component={Dashboard}/>
          <Route path="/addprovider" component={Dashboard}/>
          <Route path="/providers" component={Dashboard}/>
          <Route path="/addmovement" component={Dashboard}/>
          <Route path="/movements" component={Dashboard}/>
          <Route path="/inventoryvalue" component={Dashboard}/>
          <Route path="/restock" component={Dashboard}/>
          <Route path="/inactivity" component={Dashboard}/>
          <Route path="/articlelist" component={Dashboard}/>
          <Route path="/movementlist" component={Dashboard}/>
          <Route path="/addnewuser" component={Dashboard}/>
          <Route path="/users" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}


export default App;
