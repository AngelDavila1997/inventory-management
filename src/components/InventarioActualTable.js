import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';


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
    this.xhrRequest(`http://localhost:9000/inventarioactual/show/${page}`).then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`http://localhost:9000/inventarioactual/show/${page}`).then(res => {
      this.setState({
        isLoading: false,
        page: page,
        data: res.data,
        count: res.total,
      });
    });
  };

 render() {

    const  columns = [
      {
      name: "sku",
      label: "SKU",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "nombre_articulo",
      label: "Articulo",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "cantidad",
      label: "Cantidad",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "costo",
      label: "Costo Unitario",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "costototal",
      label: "Costo Total",
      options: {
       filter: true,
       sort: false
      }
     }
    ];
    const { data, page, count, isLoading} = this.state;

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
          Valor Actual del Inventario
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
          } data={data} columns={columns} options={options} />
      </div>
    );

  }
}

export default InventarioActualTable;