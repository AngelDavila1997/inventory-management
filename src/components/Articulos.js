import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Orders from './Orders';   

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
    fixedHeight: {
      height: 240,
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
  }
  export default function Dashboard() {
    const classes = useStyles();
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
    return (
      <div className="root">
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
            <Paper>
            <div className="row example-wrapper">
                <div className="col-xs-15 col-sm-6 offset-sm-3 example-col">
                    <div className="card">
                        <div className="card-block">
                            <form onSubmit={handleSubmit} className="k-form">
                                <fieldset>
                                    <legend>Información del Artículo</legend>
                                    <input type="hidden" name="id_usuario" value="1"/>
                                    <input type="hidden" name="id_proveedor" value="1"/>

                                    <label className="k-form-field">
                                        <span>Nombre  &nbsp;&nbsp;&nbsp;</span>
                                        <input className="textbox" name="nombre_articulo"/>
                                    </label>
                                    <br /><br />

                                    <span>Descripción  &nbsp;&nbsp;&nbsp;</span>
                                    <textarea name="descripcion"></textarea>

                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>SKU &nbsp;&nbsp;&nbsp;</span>
                                        <input type="number" className="k-number" name="sku"/>
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Costo &nbsp;&nbsp;$</span>
                                        <input type="number" className="k-number" name="costo"/>
                                    </label>
                                    <br /><br />

                                    <label className="k-form-field">
                                        <span>Fecha &nbsp;&nbsp;&nbsp;</span>
                                        <input type="date" className="k-date" name="fecha_alta" />
                                    </label>
                                    <br /><br />

                                    <div className="k-form-field">
                                        <input type="radio" name="unidad_medida" id="pieza" className="k-radio" value="Pieza"/>
                                        <label className="k-radio-label" htmlFor="pieza">Pieza &nbsp;&nbsp;&nbsp;</label>

                                        <input type="radio" name="unidad_medida" id="it" className="k-radio" value="It"/>
                                        <label className="k-radio-label" htmlFor="it">It &nbsp;&nbsp;&nbsp;</label>
                                    </div>
                                    
                                </fieldset>

                                <br /><br />
                                <div className="text-right">
                                <center><button className="k-button k-primary">Enviar</button></center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </Paper>
            <Paper>
                <Orders />
            </Paper>
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