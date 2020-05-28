import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Cookies from 'universal-cookie';
import Deposits from './components/Deposits';

const cookies = new Cookies();

if(!cookies.get("login")){
  cookies.set("login",-1)
}

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    button: {
    margin: theme.spacing(1),
    },
    seeMore: {
    marginTop: theme.spacing(3),
  },
  }));

function handleSubmit(event){
  event.preventDefault();
  const json = {};
  const data = new FormData(event.target);
  Array.from(data.entries()).forEach(([key, value]) => {
      json[key] = value;
  })
  fetch('http://localhost:9000/usuarios/login', {  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(json),
  })
    .then(response => response.text())
    .then(result => cookies.set("login", result))
}



function NuevoUsuario(){
    const classes = useStyles();
    return (
      <Deposits/>
    );
}

export default withStyles(useStyles)(NuevoUsuario);
