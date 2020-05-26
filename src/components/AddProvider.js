import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
  }));


function handleSubmit(event){
    event.preventDefault();
    const json = {};
    const data = new FormData(event.target);
    Array.from(data.entries()).forEach(([key, value]) => {
        json[key] = value;
    })
    fetch('http://localhost:9000/proveedores/insert', {  
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(json),
    });
    document.getElementById("AddProvider").reset();
  }


  export default function AddProvider() {
    const classes = useStyles();

    return (
        <div className="root">
        <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
          {/*Formulario*/}
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                  <form onSubmit={handleSubmit} id="AddProvider">
                      <Typography variant="h6" gutterBottom> Información del proveedor </Typography>

                      <input type="hidden" name="id_usuario" value={cookies.get("login")}/>

                      <Grid item xs={12}>
                        <TextField required id="Nombre" name="nombre" label="Nombre del proveedor"  />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField required id="Email" name="correo" label="Email" />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField required id="Telefono" type="number" name="telefono" label="Teléfono" InputLabelProps={{shrink: true,}} />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />}> Añadir </Button>
                      </Grid>
                  </form>
              </Paper>
            </Grid>
           </Grid>

        </Container>
        </main>
      </div>
    );
}