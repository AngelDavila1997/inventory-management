import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';

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
  }));

export default function AvailableProviders() {
    const classes = useStyles();
  
    return (
      <div className="root">
        <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            {cookies.get('login')[1] == "b" &&
              <MaterialTable
                            title="Movimientos"
                            columns={[
                              { title: 'Numero de Movimiento', field: 'num_mov'},
                              { title: 'Tipo de Movimiento', field: 'tipo' , lookup: {'e': 'Entrada', 's': 'Salida'}},
                              { title: 'Descripcion', field: 'descripcion'},
                              { title: 'Monto', field: 'costo'},
                              { title: 'Responsable', field: 'nombre'},
                            ]}
                            data={query =>
                              new Promise((resolve, reject) => {
                                let url = ""
                                if(!query.search){
                                  url = 'http://localhost:9000/movimientos/show'
                                  url += '/'+(query.page+1)
                                  url += '/'+(query.pageSize)
                                } else {
                                  url = 'http://localhost:9000/movimientos/search'
                                  url += '/'+(query.page+1)
                                  url += '/'+(query.pageSize)
                                  url += '/'+(query.search)
                                  console.log(query.search)
                                }
                                fetch(url)
                                  .then(response => response.json())
                                  .then(result => {
                                    resolve({
                                      data: result.data,
                                      page: result.page-1,
                                      totalCount: result.totalCount,
                                    })
                                  })
                              })
                            }
                            options={{
                              sorting: false
                            }}
                          />
            }
            { cookies.get('login')[1] != "b" &&
              <Paper elevation={3} className={classes.paper}>
                No tienes permitido entrar a esta sección
              </Paper>
            }
            </Grid>

          </Grid>

        </Container>
        </main>
      </div>
    );
  }
