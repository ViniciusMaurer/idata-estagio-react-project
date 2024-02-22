import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = () => {
  const [recruitment, setRecruitment] = useState([]); // Estado para armazenar os dados da API

  useEffect(() => { // Faz uma requisição à API quando o componente é montado
    axios.get('https://localhost:7232/api/v1/idata')
      .then(response => {
        const formattedRecruitment = response.data.map(item => ({ // Formata os dados recebidos da API
          ...item,
          dataEmbarque: new Date(item.dataEmbarque).toLocaleString(),
          previsaoDeEmbarque: new Date(item.previsaoDeEmbarque).toLocaleString(),
          dataChegada: new Date(item.dataChegada).toLocaleString(),
          previsaoDeChegada: new Date(item.previsaoDeChegada).toLocaleString(),
          liberadoParaFaturamento: new Date(item.liberadoParaFaturamento).toLocaleString(),
        }));
        setRecruitment(formattedRecruitment);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  const columnDefs = [ // Definição das colunas da tabela
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Exportador", field: "exportador", sortable: true, filter: true },
    { headerName: "Importador", field: "importador", sortable: true, filter: true },
    { headerName: "Data de Embarque", field: "dataEmbarque", sortable: true, filter: true },
    { headerName: "Previsão de Embarque", field: "previsaoDeEmbarque", sortable: true, filter: true },
    { headerName: "Data de Chegada", field: "dataChegada", sortable: true, filter: true },
    { headerName: "Previsão de Chegada", field: "previsaoDeChegada", sortable: true, filter: true },
    { headerName: "DI", field: "di", sortable: true, filter: true },
    { headerName: "Navio", field: "navio", sortable: true, filter: true },
    { headerName: "Master", field: "master", sortable: true, filter: true },
    { headerName: "House", field: "house", sortable: true, filter: true },
    { headerName: "Fatura", field: "fatura", sortable: true, filter: true },
    { headerName: "Frete Modo", field: "freteModo", sortable: true, filter: true },
    { headerName: "Container", field: "container", sortable: true, filter: true },
    { headerName: "Canal Parametrização", field: "canalParametrizacao", sortable: true, filter: true },
    { headerName: "Origem", field: "origem", sortable: true, filter: true },
    { headerName: "Destino", field: "destino", sortable: true, filter: true },
    { headerName: "Liberado Para Faturamento", field: "liberadoParaFaturamento", sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ width: '100%', boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={recruitment}
        pagination={false}
        rowSelection='multiple'
        animateRows={true}
        domLayout='autoHeight'
        localeText={{
          equals: 'Igual',
          notEqual: 'Diferente',
          contains: 'Contém',
          notContains: 'Não contém',
          startsWith: 'Começa com',
          endsWith: 'Termina com',
          greaterThan: 'Maior que',
          lessThan: 'Menor que',
          blank: 'Em branco',
          notBlank: 'Não em branco',
        }}
      />
    </div>
  );
}

export default Table;