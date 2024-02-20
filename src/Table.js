import React, { useState } from 'react';
import { Component } from 'react';  
import { AgGridReact } from 'ag-grid-react'; // React Grid 
import "ag-grid-community/styles/ag-grid.css"; // CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Tema

const Table = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 60000, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "electric", sortable: true, filter: true }
  ]);

  return (
    // Container
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default Table;