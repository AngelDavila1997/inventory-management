import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import AddProvider from './components/AddProvider';
import NuevoUsuario from './components/NuevoUsuario'; 
import NuevoMovimiento from './components/NuevoMovimiento'; 
import AddArticle from './components/AddArticle';
import AvailableArticles from './components/AvailableArticles';
import AvailableProviders from './components/AvailableProviders';
import UserList from './components/UserList';
import Test from './Test';
import AvailableMovements from './components/AvailableMovements';
import CssBaseline from '@material-ui/core/CssBaseline';

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

          <Route path="/dash" component={Dashboard}/>
          <Route path="/addarticle" component={AddArticle}/>
          <Route path="/articles" component={AvailableArticles}/>
          <Route path="/addprovider" component={AddProvider}/>
          <Route path="/providers" component={AvailableProviders}/>
          <Route path="/addmovement" component={NuevoMovimiento}/>
          <Route path="/movements" component={AvailableMovements}/>
          <Route path="/inventoryvalue" component={Dashboard}/>
          <Route path="/restock" component={Dashboard}/>
          <Route path="/inactivity" component={Dashboard}/>
          <Route path="/articlelist" component={Dashboard}/>
          <Route path="/movementlist" component={Dashboard}/>
          <Route path="/addnewuser" component={NuevoUsuario}/>
          <Route path="/userlist" component={UserList}/>
          <Route path="/test" component={Test}/>

        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;
