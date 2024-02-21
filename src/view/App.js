import React from 'react';
import NavbarResponsive from './Header';
import Table from './Table';

function App() {
  
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      
      <div className='header'>
        <NavbarResponsive></NavbarResponsive>
      </div>

      <div className='container table py-5'>
        <Table></Table>
      </div>
    </div>
  );
}

export default App;