import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

class InactividadTable extends Component{
  
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
  title="Inactividad de Artículos"
  columns={[
    { title: 'SKU', field: 'sku'},
    { title: 'Nombre', field: 'nombre' },
    { title: 'Cantidad', field: 'cantidad'},
    { title: 'Ultimo movimiento', field: 'ultima', type: 'date'},
    { title: 'Días desde ultimo movimiento', field: 'diff'},
  ]}
  data={query =>
    new Promise((resolve, reject) => {
      let url = 'http://localhost:9000/inactividad/show'
      url += '/'+(query.page+1)
      url += '/'+(query.pageSize)
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
    search: false,
    sorting: false
  }}
/>
  )
}
}


export default InactividadTable;