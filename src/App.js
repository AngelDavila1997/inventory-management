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
import InventarioActual from './components/InventarioActual';
import Login from './components/Login';
import Resurtir from './components/Resurtir';
import Inactividad from './components/Inactividad';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

//HOLA PROBANDO

if(!cookies.get("login") || cookies.get("login") == -1){
  console.log("must login")
  cookies.set("login",-1)
  if (window.location.pathname != "/login")
    window.location = "/login"
}

if(cookies.get("login") && cookies.get("login") != -1){
  console.log(cookies.get("login"))
  if (window.location.pathname == "/login")
    window.location = "/"
}


class App extends Component {
  render(){
    return (
    <Router>
      <div className="root">
        <CssBaseline />
        <ButtonAppBar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/addarticle" component={AddArticle}/>
          <Route path="/articles" component={AvailableArticles}/>
          <Route path="/addprovider" component={AddProvider}/>
          <Route path="/providers" component={AvailableProviders}/>
          <Route path="/addmovement" component={NuevoMovimiento}/>
          <Route path="/movements" component={AvailableMovements}/>
          <Route path="/inventoryvalue" component={InventarioActual}/>
          <Route path="/restock" component={Resurtir}/>
          <Route path="/inactivity" component={Inactividad}/>
          <Route path="/addnewuser" component={NuevoUsuario}/>
          <Route path="/userlist" component={UserList}/>
          <Route path="/test" component={Test}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;
