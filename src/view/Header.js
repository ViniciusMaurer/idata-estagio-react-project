import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Tabela']; // Páginas disponíveis na barra de navegação

function NavbarResponsive() {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* Ícone do robô */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          {/* Título da aplicação */}
          <Button
            variant="h6"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert-layer',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none !important',
              whiteSpace: 'nowrap',
              '&:hover': {
                color: 'black',
              },
            }}
          >
            DEADLINE
          </Button>

          {/* Botão de navegação */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',  
                  fontFamily: 'revert-layer', 
                  fontWeight: '700', 
                  letterSpacing: '.3rem',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarResponsive;