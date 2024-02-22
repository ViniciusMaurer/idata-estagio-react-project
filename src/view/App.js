import React from 'react';
// Importações dos componentes
import NavbarResponsive from './Header'; // Importa o componente NavbarResponsive
import Table from './Table'; // Importa o componente Table

// Importações das imagens
import linkedinicon from './img/linkedin.png'; // Importa o ícone do LinkedIn
import githubicon from './img/github.png'; // Importa o ícone do GitHub
import whatsappicon from './img/whatsapp.png' // Importa o ícone do WhatsApp

function App() {

  return (
    <div>
      {/* Importa o CSS do Bootstrap */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      
      <div className='header'> {/* Renderiza o componente NavbarResponsive */}
        <NavbarResponsive></NavbarResponsive>
      </div>
      
      <div className='container py-5'> {/* Renderiza o componente Table */}
        <Table></Table>
      </div>

      {/* Criação do footer */}
      <div className='footer'>
        <div className="container-fluid">
          <footer className="pt-3 mt-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3"> {/* Ícones de redes sociais */}
              <li className="nav-item px-3">
                <a href="https://www.linkedin.com/in/vin%C3%ADcius-maurer-a1a952242/" className="nav-link px-2 text-muted">
                  <img src={linkedinicon} alt="linkedinicon"/>
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="https://github.com/ViniciusMaurer" className="nav-link px-2 text-muted">
                  <img src={githubicon} alt="githubicon"/>
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="https://wa.me/5551999962604" className="nav-link px-2 text-muted">
                  <img src={whatsappicon} alt="whatsappicon"/>
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">&copy; 2024 - Vinícius Maurer</p> {/* Informações de direitos autorais */}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;