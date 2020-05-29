import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

class AvailableArticlesTable
 extends Component{
  
    constructor(props) {
    super(props);
    this.state = {
      proveedores: [],
      isLoading: false,
      page: 0,
      count: 1,
    };
  }
  state = {
    page: 0,
    count: 1,
    data: [["Loading Data..."]],
    isLoading: false,
  };
 componentDidMount() {
    this.getData(this.state.page);
  }


  xhrRequest = (url) => {

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          resolve({
            data: result.data,
            total: result.total,
          })
        })
    });

  }  


  // get data
  getData = (page) => {
    this.setState({ isLoading: true });
    this.xhrRequest(`http://localhost:9000/articulos
/show/${page}`).then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`http://localhost:9000/articulos
/show/${page}`).then(res => {
      this.setState({
        isLoading: false,
        page: page,
        data: res.data,
        count: res.total,
      });
    });
  };

 render() {
  return (
  <MaterialTable
  title="Artículos Disponibles"
  columns={[
    { title: 'SKU', field: 'sku'},
    { title: 'Nombre Articulo', field: 'nombre_articulo'},
    { title: 'Descripción', field: 'descripcion'},
    { title: 'Costo', field: 'costo' },
    { title: 'Unidad de Medida', field: 'unidad_medida' },
    { title: 'Fecha de Alta', field: 'fecha_alta', type: 'date'},
    { title: 'Creador', field: 'nombre_usuario'},
    { title: 'Proveedor', field: 'nombre_proveedor'},
  ]}
  data={query =>
    new Promise((resolve, reject) => {
      let url = 'http://localhost:9000/articulos'
      if(!query.search){
        url += '/show'
        url += '/'+(query.page+1)
        url += '/'+(query.pageSize)
      } else {
        url += '/search'
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
    search: true,
    sorting: false
  }}
/>
  )
}
}


export default AvailableArticlesTable;
