import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';


class AvailableArticlesTable extends Component{
  
    constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      isLoading: false,
      page: 0,
      count: 1,
      searchText: "",
    };
  }
  state = {
    page: 0,
    count: 1,
    data: [["Loading Data..."]],
    isLoading: false,
    searchText: "",
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
    this.xhrRequest(`http://localhost:9000/articulos/show/${page}`).then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`http://localhost:9000/articulos/show/${page}`).then(res => {
      this.setState({
        isLoading: false,
        page: page,
        data: res.data,
        count: res.total,
      });
    });
  };
  customSearch = (searchQuery, currentRow, columns) => {
    let isFound = false;
    currentRow.forEach(col => {
      if (col.toString().indexOf(searchQuery) >= 0) {
        isFound = true;
      }
    });
    return isFound;
  }

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
      label: "Nombre Articulo",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "descripcion",
      label: "Descripción",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "costo",
      label: "Costo",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "unidad_medida",
      label: "Unidad de Medida",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "fecha_alta",
      label: "Fecha de alta",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "id_usuario",
      label: "Creador",
      options: {
       filter: true,
       sort: false
      }
     },{
      name: "id_proveedor",
      label: "Proveedor",
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
      searchText: this.state.searchText,
      onTableChange: (action, tableState) => {

        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want

        switch (action) {
          case 'changePage':
            this.changePage(tableState.page);
            break;
          case 'search':
            this.customSearch(tableState.searchText, tableState.data, columns)
        }
      }
    };
    return (
      <div>
        <MUIDataTable title={<Typography>
          Artículos Disponibles
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
          } data={data} columns={columns} options={options} />
      </div>
    );

  }
}

export default AvailableArticlesTable;