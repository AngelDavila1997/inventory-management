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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

function NuevoMovimiento(){
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

    const [articulo, setArticulo] = React.useState('');
    const handleChange = (event) => {
    setArticulo(event.target.value);
    };
  
    return (
      <div>
      class Formulario extends React.Component {
        <div className="root">
          <main>
            <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={3}>
                {/*Formulario*/}
                 <Grid item xs={12}>
                  <Paper elevation={3} className={classes.paper}>
                      <form>
                        <Typography variant="h6" gutterBottom> Información del movimiento </Typography>

                        <Grid item xs={12}>
                          <FormLabel component="legend">Tipo de movimiento </FormLabel>
                            <RadioGroup aria-label="movimiento" name="tipo">
                              <FormControlLabel value="e" control={<Radio />} label="Entrada" />
                              <FormControlLabel value="s" control={<Radio />} label="Salida" />
                            </RadioGroup>
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                          <InputLabel id="articulos">Articulos</InputLabel>
                          <Select labelId="articulos" id="articulos" value={articulo} onChange={handleChange}>
                            <MenuItem value={"ejemplo"}>EJEMPLO1</MenuItem>
                            <MenuItem value={"ejemplo1"}>EJEMPLO2</MenuItem>
                            <MenuItem value={"ejemplo2"}>EJEMPLO3</MenuItem>
                          </Select>
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                          <TextField required id="Cantidad" type="number" name="cantidad" label="Cantidad" InputLabelProps={{shrink: true,}} />
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                          <TextField required id="Fecha" type="date" name="fecha_mov" label="Fecha" InputLabelProps={{shrink: true,}} />
                        </Grid>
                        <br />
                        <Typography variant="h6" gutterBottom> Detalles del movimiento </Typography>
                        <Grid item xs={12}>
                          <TextField id="Descripción" name="descripcion" label="Descripción" fullWidth  />
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
}
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          CREAR Movimiento
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">ALERTA</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Estas seguro? Una vez aceptado el movimiento no podrán realizarse cambios en este. Verifique su información cuidadosamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default withStyles(useStyles)(NuevoMovimiento);