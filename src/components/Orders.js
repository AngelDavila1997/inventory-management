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


class Orders extends Component{
  constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }

  createData(sku, nombre_articulo, descripcion, costo, unidad_medida, fecha_alta, id_usuario, id_proveedor) {
    return {sku, nombre_articulo, descripcion, costo, unidad_medida, fecha_alta, id_usuario, id_proveedor};
  }

  fillRows(){
    var temp = []
    if(this.state.rows.length === 0){
      this.state.resp.data.forEach(data => {
        if(!this.state.rows.includes(data)){
          console.log(data)
          temp.push(this.createData(data.sku, data.nombre_articulo, data.descripcion, data.costo, data.unidad_medida, data.fecha_alta, data.id_usuario, data.id_proveedor))
        }
      });
    }
    this.setState({ rows: temp });
  }

  preventDefault(event){
    event.preventDefault();
  }

  componentDidMount(){
    fetch("http://localhost:9000/articulos/show")
          .then(res => res.json())
          .then(res => this.setState({ resp: res }))
          .then(() => this.fillRows());
  }


  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Title>Inventario Actual</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Nombre Articulo</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Costo</TableCell>
              <TableCell>Unidad de Medida</TableCell>
              <TableCell>Fecha de Alta</TableCell>
              <TableCell>Creador</TableCell>
              <TableCell>Proveedor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow key={row.sku}>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.nombre_articulo}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.costo}</TableCell>
                <TableCell>{row.unidad_medida}</TableCell>
                <TableCell>{row.fecha_alta}</TableCell>
                <TableCell>{row.id_usuario}</TableCell>
                <TableCell>{row.id_proveedor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
 
export default withStyles(useStyles)(Orders);