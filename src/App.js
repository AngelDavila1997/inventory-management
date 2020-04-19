import React, {Component} from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Dashboard from './components/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
//HOLA PROBANDO
class App extends Component {
  render(){
    return (
    <div className="root">
      <CssBaseline />
      <ButtonAppBar/>
      <Dashboard />
    </div>
    );
  }
}

export default App;
