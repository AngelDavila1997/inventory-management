import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

class InventarioActualTable extends Component{
  
  constructor(props) {
  super(props);
  this.state = {
    proveedores: [],
    isLoading: false,
    page: 0,
    count: 1,
  };
}


render() {
  return (
  <MaterialTable
  title="Valor Actual del Inventario"
  columns={[
    { title: 'SKU', field: 'sku'},
    { title: 'Articulo', field: 'nombre_articulo' },
    { title: 'Cantidad', field: 'cantidad'},
    { title: 'Valor Unitario', field: 'costo'},
    { title: 'Valor Total', field: 'costototal'},
  ]}
  data={query =>
    new Promise((resolve, reject) => {
      let url = "http://localhost:9000/inventarioactual"
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


export default InventarioActualTable;
