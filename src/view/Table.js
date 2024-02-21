import React, { Component } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState, useMemo } from 'react';  
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';



class Table extends Component {
  state = {
    recruitment: []
  }

  componentDidMount() {
    axios.get('https://localhost:7232/api/v1/idata').then(response => {
      this.setState({ recruitment: response.data });
    });
  }

  render() {
    const columnDefs = [
      { headerName: "ID", field: "id", sortable: true, filter: true},
      { headerName: "Exportador", field: "exportador", sortable: true, filter: true},
      { headerName: "Importador", field: "importador", sortable: true, filter: true},
      { headerName: "Data de Embarque", field: "dataEmbarque", sortable: true, filter: true},
      { headerName: "Previsão de Embarque", field: "previsaoDeEmbarque", sortable: true, filter: true},
      { headerName: "Data de Chegada", field: "dataChegada", sortable: true, filter: true},
      { headerName: "Previsão de Chegada", field: "previsaoDeChegada", sortable: true, filter: true},
      { headerName: "DI", field: "di", sortable: true, filter: true},
      { headerName: "Navio", field: "navio", sortable: true, filter: true},
      { headerName: "Master", field: "master", sortable: true, filter: true},
      { headerName: "House", field: "house", sortable: true, filter: true},
      { headerName: "Fatura", field: "fatura", sortable: true, filter: true},
      { headerName: "Frete Modo", field: "freteModo", sortable: true, filter: true},
      { headerName: "Container", field: "container", sortable: true, filter: true},
      { headerName: "Canal Parametrização", field: "canalParametrizacao", sortable: true, filter: true},
      { headerName: "Origem", field: "origem", sortable: true, filter: true},
      { headerName: "Destino", field: "destino", sortable: true, filter: true},
      { headerName: "Liberado Para Faturamento", field: "liberadoParaFaturamento", sortable: true, filter: true},
    ];

    return (
      <div className="ag-theme-alpine" style={{ height: '550px', width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={this.state.recruitment}
          pagination={true}
          rowSelection='multiple'
          animateRows={true}
        />
      </div>
    );
  }
}

export default Table;