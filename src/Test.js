import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
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
  });

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
    const classes = this.props
    return (
        <React.Fragment>
            <div className="root">
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="id">Enter Id: </label>
                        <input id="id" name="id" type="text"/>
                        <input id="id2" name="id2" type="text"/>
                        <button>Search</button>
                    </form>
                  <div className="Table" id="Table"/>
                </main>
            </div>
            
        </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Insert);

/*

return (
    <div className="root">
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    );
*/