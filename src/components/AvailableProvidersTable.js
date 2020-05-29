import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

class AvailableProvidersTable extends Component{
  
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
    this.xhrRequest(`http://localhost:9000/proveedores/show/${page}`).then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`http://localhost:9000/proveedores/show/${page}`).then(res => {
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
  title="Proveedores Disponibles"
  columns={[
    { title: 'ID', field: 'id_proveedor'},
    { title: 'Nombre', field: 'nombre' },
    { title: 'Correo', field: 'correo'},
    { title: 'Teléfono', field: 'telefono'},
  ]}
  data={query =>
    new Promise((resolve, reject) => {
      let url = 'http://localhost:9000/proveedores'
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

export default AvailableProvidersTable;