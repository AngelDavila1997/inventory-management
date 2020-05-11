import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

const useStyles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});


class AvailableProvidersTable extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(id_proveedor, nombre, correo, telefono) {
    return {id_proveedor, nombre, correo, telefono};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(data => {
        if(!this.state.rows.includes(data)){
          console.log(data)
          temp.push(this.createData(data.id_proveedor, data.nombre, data.correo, data.telefono))
        }
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/proveedores/show")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }


  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Title>Proveedores</Title>
        <Divider />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.id_proveedor}>
                <TableCell>{row.id_proveedor}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.correo}</TableCell>
                <TableCell>{row.telefono}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
 
export default withStyles(useStyles)(AvailableProvidersTable);