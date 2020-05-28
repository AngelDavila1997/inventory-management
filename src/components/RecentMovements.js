import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
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


class RecentMovements extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(num_mov, fecha_alta, tipo, costo) {
    if(tipo == "e") tipo = "Entrada"
    if(tipo == "s") tipo = "Salida"
    return {num_mov, fecha_alta, tipo, costo};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(data => {
        if(!this.state.rows.includes(data)){
          temp.push(this.createData(data.num_mov, data.fecha_alta, data.tipo, data.costo))
        }
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/movimientos/showlimited")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }


  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Title>Ultimos Movimientos Realizados</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Numero de Movimiento</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.num_mov}>
                <TableCell>{row.num_mov}</TableCell>
                <TableCell>{row.fecha_alta}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.costo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
 
export default withStyles(useStyles)(RecentMovements);