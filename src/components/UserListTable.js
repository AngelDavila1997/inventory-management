import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Divider from '@material-ui/core/Divider';


class UserListTable extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(id_usuario, nombre_usuario, nombre, apellido, tipo_usuario, fecha_alta) {
    return {id_usuario, nombre_usuario, nombre, apellido, tipo_usuario, fecha_alta};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(data => {
        if(!this.state.rows.includes(data)){
          console.log(data)
          temp.push(this.createData(data.id_usuario, data.nombre_usuario, data.nombre, data.apellido, data.tipo_usuario, data.fecha_alta))
        }
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/usuarios/show")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }


  render(){
    return(
      <React.Fragment>
        <Title>Usuarios</Title>
        <Divider />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Tipo de usuario</TableCell>
              <TableCell>Fecha de alta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.id_usuario}>
                <TableCell>{row.id_usuario}</TableCell>
                <TableCell>{row.nombre_usuario}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>{row.tipo_usuario}</TableCell>
                <TableCell>{row.fecha_alta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
 
export default (UserListTable);