import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Divider from '@material-ui/core/Divider';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];


class AvailableArticlesTable extends Component{
  /*constructor(props){
    super(props);
    this.state = { rows: [] , resp: []};
  }*/
    constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      isLoading: false,
      page: 0,
      count: 1
    };
  }
  state = {
    page: 0,
    count: 1,
    data: [["Loading Data..."]],
    isLoading: false
  };
 componentDidMount() {
    this.getData();
  }

  // get data
  getData = () => {
    this.setState({ isLoading: true });
    this.xhrRequest().then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  // mock async function
  xhrRequest = () => {

    return new Promise((resolve, reject) => {
      const total = 124;  // mock record count from server
      // mock page data
      const srcData = [
        ["Gabby George", "Business Analyst", "Minneapolis"],
        ["Aiden Lloyd", "Business Consultant", "Dallas"],
        ["Jaden Collins", "Attorney", "Santa Ana"],
        ["Franky Rees", "Business Analyst", "St. Petersburg"],
        ["Aaren Rose", "Business Analyst", "Toledo"]
      ];
      
      /*componentDidMount(){
        fetch('http://localhost:9000/articulos/show')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
      }*/

      const data = (acc => acc.push(...srcData) && acc, []);
    

      setTimeout(() => {
        resolve({
          data, total
        });
      }, 2500);

    });

  }
  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`/myApiServer?page=${page}`).then(res => {
      this.setState({
        isLoading: false,
        page: page,
        data: res.data,
        count: res.total,
      });
    });
  };

  /*createData(sku, nombre_articulo, descripcion, costo, unidad_medida, fecha_alta, id_usuario, id_proveedor) {
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
    const  columns = ["SKU", "Nombre Articulo", "Descripción", "Costo", "Unidad de Medida", "Fecha de alta", "Creador", "Proveedor"];
    const options = {
      filterType: 'checkbox',
    };

    return(
      <React.Fragment>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
        <Title>Inventario Actual</Title>
        <Divider />
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
 
export default (AvailableArticlesTable);*/
 render() {

    const  columns = ["SKU", "Nombre Articulo", "Descripción", "Costo", "Unidad de Medida", "Fecha de alta", "Creador", "Proveedor"];
    const { data, page, count, isLoading } = this.state;

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      serverSide: true,
      count: count,
      page: page,
      onTableChange: (action, tableState) => {

        console.log(action, tableState);
        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want

        switch (action) {
          case 'changePage':
            this.changePage(tableState.page);
            break;
        }
      }
    };
    return (
      <div>
        <MUIDataTable title={<Typography>
          Inventario Actual
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
          } data={data} columns={columns} options={options} />
      </div>
    );

  }
}

export default AvailableArticlesTable;