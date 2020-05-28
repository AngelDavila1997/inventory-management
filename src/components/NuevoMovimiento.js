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
import MaterialTable from 'material-table';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

var CreoMovimiento = false;
var index = 0;


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

  async function handleSubmit(event){
    event.preventDefault();
    const json = {};
    
    const data = new FormData(event.target);
    Array.from(data.entries()).forEach(([key, value]) => {
        json[key] = value;
    })
    return fetch('http://localhost:9000/movimientos/insert', {  
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(json),
    })
    .then(res => res.json())
    .then(data => console.log(index = data.id))
    .then(() => console.log(CreoMovimiento = true))
  }
function NuevoMovimiento(){

    const [open, setOpen] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmitInside = (event) => {
      handleSubmit(event)
      .then(()=> setSent(true))
    };

    const [articulo, setArticulo] = React.useState('');
    const handleChange = (event) => {
    setArticulo(event.target.value);
    };
    
    return (
      <div>
        <div className="root">
          <main>
            <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={3}>
                {/*Formulario*/}
                 <Grid item xs={12}>
                  <Paper elevation={3} className={classes.paper}>
                  { cookies.get('login')[1] != "a" &&
                  <form onSubmit={handleSubmitInside} id="NuevoMovimiento">
                  <input type="hidden" name="id_usuario" value={cookies.get("login")[0]}/>
                        <Typography variant="h6" gutterBottom> Información del movimiento </Typography>

                        <Grid item xs={12}>
                          <FormLabel component="legend">Tipo de movimiento </FormLabel>
                            <RadioGroup aria-label="movimiento" name="tipo">
                              <FormControlLabel value="e" control={<Radio />} label="Entrada" />
                              <FormControlLabel value="s" control={<Radio />} label="Salida" />
                            </RadioGroup>
                        </Grid>
                        <br />
                        <Typography variant="h6" gutterBottom> Detalles del movimiento </Typography>
                        <Grid item xs={12}>
                          <TextField id="Descripción" name="descripcion" label="Descripción" fullWidth  />
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                          <Button variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />} onClick={handleClickOpen} disabled={CreoMovimiento}>
                            CREAR Movimiento
                          </Button>
                        </Grid>
                        <Grid item sx={12}>
                          { CreoMovimiento &&
                            <MaterialTable
                            title="Articulos"
                            columns={[
                              { title: 'SKU', field: 'sku'},
                              { title: 'Nombre', field: 'nombre_articulo' , editable: 'never'},
                              { title: 'Descripcion', field: 'descripcion', editable: 'never'},
                              { title: 'Costo', field: 'costo', editable: 'never'},
                              { title: 'Unidad de Medida', field: 'unidad_medida', editable: 'never'},
                              { title: 'Cantidad', field: 'cantidad'},
                              { title: 'Proveedor', field: 'nombre_proveedor', editable: 'never'},
                            ]}
                            data={query =>
                              new Promise((resolve, reject) => {
                                let url = 'http://localhost:9000/movimientos/load'
                                url += '/'+index
                                fetch(url)
                                  .then(response => response.json())
                                  .then(result => {
                                    resolve({
                                      data: result.data,
                                      page: result.page,
                                      totalCount: result.totalCount,
                                    })
                                  })
                              })
                            }
                            options={{
                              search: false,
                              actionsColumnIndex: -1.
                            }}
                            editable={{
                              onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                          let url = 'http://localhost:9000/movimientos/insertArticulo'
                                          url += '/'+index

                                          fetch(url, {
                                            method: 'post',
                                            headers: {'Content-Type': 'application/json'},
                                            body: JSON.stringify(newData),
                                          })
                                            .then(() => resolve())
                                        }
                                        resolve();
                                    }, 1000);
                                }),
                            }}
                          />
                          }
                        </Grid>
                      </form>
                      }
                      { cookies.get('login')[1] == "a" &&
                        "No tienes permitido entrar a esta sección"
                      }
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </main>
          </div>
        
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
            <Button 
            onClick={handleClose}
            color="primary"
            autoFocus
            type="submit"
            form="NuevoMovimiento"
            >
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default (NuevoMovimiento);