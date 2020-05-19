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
  fetch('http://localhost:9000/usuarios/insert', {  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(json),
  });
  document.getElementById("NuevoUsuario").reset();
}


function NuevoUsuario(){
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
      class Formulario extends React.Component {
          <div className="root">
            <main>
              <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Paper elevation={3} className={classes.paper}>
                        <form onSubmit={handleSubmit} id="NuevoUsuario">
                          <Typography variant="h6" gutterBottom> Información del usuario </Typography>

                          <Grid item xs={12}>
                            <TextField required id="Nombre" name="nombre" label="Nombre"  />
                          </Grid>
                          <br />
                          <Grid item xs={12}>
                            <TextField required id="Apellido" name="apellido" label="Apellido"  />
                          </Grid>
                          <br />
                          <Typography variant="h6" gutterBottom> Detalles del usuario </Typography>

                          <Grid item xs={12}>
                            <TextField required id="Usuario" name="nombre_usuario" label="Usuario"  />
                          </Grid>
                          <br />
                          <Grid item xs={12}>
                            <TextField required type="password" id="Password" name="contrasena" label="Contraseña"  />
                          </Grid>
                          <br />
                          <Grid item xs={12}>
                            <FormLabel component="legend">Tipo de usuario </FormLabel>
                              <RadioGroup aria-label="tipo" name="tipo">
                                <FormControlLabel value="a" control={<Radio />} label="Administrador" />
                                <FormControlLabel value="b" control={<Radio />} label="Encargado" />
                                <FormControlLabel value="c" control={<Radio />} label="Empleado" />
                              </RadioGroup>
                          </Grid>
                          <br />
                          <Grid item xs={12}>
                          <Button variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />} onClick={handleClickOpen}>
                            CREAR USUARIO
                          </Button>
                          </Grid>
                        </form>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </div>

}
        
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">ALERTA</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Estas seguro? Una vez aceptado el usuario no podrán realizarse cambios en este. Verifique su información cuidadosamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button 
            onClick={handleClose}
            color="primary"
            autoFocus
            type="submit"
            form="NuevoUsuario"
            >
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default withStyles(useStyles)(NuevoUsuario);