import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import AddProvider from './components/AddProvider';
import NuevoUsuario from './components/NuevoUsuario'; 
import NuevoMovimiento from './components/NuevoMovimiento'; 
import AddArticle from './components/AddArticle';
import AvailableArticles from './components/AvailableArticles';
import AvailableProviders from './components/AvailableProviders';
import UserList from './components/UserList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tester from './Test';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Route path="/test" component={Tester}/>
          <Route path="/dash" component={Dashboard}/>
          <Route path="/addarticle" component={AddArticle}/>
          <Route path="/articles" component={AvailableArticles}/>
          <Route path="/addprovider" component={AddProvider}/>
          <Route path="/providers" component={AvailableProviders}/>
          <Route path="/addmovement" component={NuevoMovimiento}/>
          <Route path="/movements" component={Dashboard}/>
          <Route path="/inventoryvalue" component={Dashboard}/>
          <Route path="/restock" component={Dashboard}/>
          <Route path="/inactivity" component={Dashboard}/>
          <Route path="/articlelist" component={Dashboard}/>
          <Route path="/movementlist" component={Dashboard}/>
          <Route path="/addnewuser" component={NuevoUsuario}/>
          <Route path="/userlist" component={UserList}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;
