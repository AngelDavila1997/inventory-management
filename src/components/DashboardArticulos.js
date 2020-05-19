import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


class DashboardArticulos extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(nombre_articulo, cantidad) {
    return {nombre_articulo, cantidad};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(data => {
        if(!this.state.rows.includes(data)){
          console.log(data)
          temp.push(this.createData(data.nombre_articulo, data.cantidad))
        }
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/dashboardarticulos/show")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }


  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Title>Articulos Por Terminarse</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Articulo</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.sku}>
                <TableCell>{row.nombre_articulo}</TableCell>
                <TableCell>{row.cantidad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
 
export default withStyles(useStyles)(DashboardArticulos);