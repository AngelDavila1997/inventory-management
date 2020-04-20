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
          <Route path="/test" component={Tester}/>
           <Route path="/test" component={Tester}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}


export default App;
