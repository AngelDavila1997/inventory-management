import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

var loading = true;
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
    fetch('http://localhost:9000/articulos/insert', {  
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(json),
    });
    document.getElementById("AddArticle").reset();
  }

  export default function AddArticle() {
    const classes = useStyles();
    const [providers, setProviders] = React.useState({});
    const [loadedProviders, setLoadedProviders] = React.useState(false);
    const getProviders = () => {
      new Promise((resolve, reject) => {
        let url = 'http://localhost:9000/proveedores/show'
        fetch(url)
          .then(response => response.json())
          .then(result => {
            resolve(setProviders(result.data))
          })
          .then(() => setLoadedProviders(true))
      })
    }

    if(loading){
      loading = false
      getProviders()
    }
    return (
      <div className="root">
        <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
          {/*Formulario*/}
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
              { cookies.get('login')[1] == "b" &&
                  <form onSubmit={handleSubmit} id="AddArticle">
                      <Typography variant="h6" gutterBottom> Información de artículo </Typography>

                      <input type="hidden" name="id_usuario" value={cookies.get("login")[0]}/>

                      <Grid item xs={12}>
                        <TextField required id="Nombre" name="nombre_articulo" label="Nombre de articulo"  />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField id="Descripción" name="descripcion" label="Descripción" fullWidth  />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField required id="SKU" name="sku" label="SKU"  />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                      <FormLabel component="legend">Proveedor</FormLabel>
                        <Select required id="Proveedor" name="id_proveedor" label="Proveedor" >
                          {loadedProviders && 
                          providers.map((provider) => <MenuItem value= {provider.id_proveedor} > {provider.nombre} </MenuItem>)}
                        </Select>
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField required id="Costo" type="number" name="costo" label="Costo" InputLabelProps={{shrink: true,}} />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <TextField required id="Resurtir" type="number" name="resurtir" label="Resurtir" InputLabelProps={{shrink: true,}} />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <FormLabel component="legend">Unidad de medida </FormLabel>
                          <RadioGroup aria-label="unidad" name="unidad_medida" id="unidad_medida">
                            <FormControlLabel value="pz" control={<Radio />} label="Pieza" />
                            <FormControlLabel value="lt" control={<Radio />} label="Lt" />
                            <FormControlLabel value="ot" control={<Radio />} label="Otro" />
                          </RadioGroup>
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />}> Añadir </Button>
                      </Grid>
                  </form>
                  }
                  { cookies.get('login')[1] != "b" &&
                    "No tienes permitido entrar a esta sección"
                  }
              </Paper>
            </Grid>

          </Grid>

        </Container>
        </main>
      </div>
    );
  }

/*
class Insert extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  callAPI(search) {
    fetch("http://localhost:9000/insert/", search)
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  
  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:9000/insert', {
        method: 'POST',
        headers: {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        },
        body: data,
      });
  }

  render(){
    //const classes = this.props;
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className="root">
          <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="false" className={classes.container}>
              <Paper className={fixedHeightPaper}>
                  <div>
                  <form>
                      <label htmlFor="id">Enter Id: </label>
                      <input id="id" name="id" type="text"/>
                      <br/>
                      <label htmlFor="id">Enter Id2: </label>
                      <input id="id2" name="id2" type="text"/>
                      <br/>
                      <button>Search</button>
                  </form>
                  <div className="Table" id="Table"/>
                  </div>
              </Paper>
          </Container>
          </main>
        </div>
      );
  }
}
*/