import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InventarioActualTable from './InventarioActualTable';  

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

export default function InventarioActual() {
    const classes = useStyles();
  
    return (
      <div className="root">
        <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {cookies.get('login')[1] == "b" &&
                <InventarioActualTable />
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
