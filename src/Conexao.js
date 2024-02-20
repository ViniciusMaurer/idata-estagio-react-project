import React, { Component } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



class Conexao extends Component {
  state = {
    recruitment: []
  }

  componentDidMount() {
    axios.get('https://localhost:7232/api/v1/idata').then(response => {
      console.log(response.data);
      this.setState({ recruitment: response.data });
    });
  }

  render() {
    const columnDefs = [
      { headerName: "ID", field: "id" },
      { headerName: "Exportador", field: "exportador" },
      { headerName: "Importador", field: "importador" },
      { headerName: "Data de Embarque", field: "dataEmbarque" },
      { headerName: "Previsão de Embarque", field: "previsaoDeEmbarque" },
      { headerName: "Data de Chegada", field: "dataChegada" },
      { headerName: "Previsão de Chegada", field: "previsaoDeChegada" },
    ];

    return (
      <div className="ag-theme-alpine" style={{ height: '800px', width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={this.state.recruitment}
          pagination={true}
        />
      </div>
    );
  }
}

export default Conexao;