import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

class ResurtirTable extends Component{
  
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
    this.xhrRequest(`http://localhost:9000/resurtir/show/${page}`).then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`http://localhost:9000/resurtir/show/${page}`).then(res => {
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
  title="Resurtir Almacén"
  columns={[
    { title: 'SKU', field: 'sku'},
    { title: 'Artículo', field: 'nombre_articulo' },
    { title: 'Cantidad en Inventario', field: 'cantidad'},
    { title: 'Proveedor', field: 'proveedor'},
  ]}
  data={query =>
    new Promise((resolve, reject) => {
      let url = ""
      if(!query.search){
        url = 'http://localhost:9000/resurtir/show'
        url += '/'+(query.page+1)
        url += '/'+(query.pageSize)
      } else {
        url = 'http://localhost:9000/resurtir/search'
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

export default ResurtirTable;