import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; // Importando MenuItem
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Tabela'];

function NavbarResponsive() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Ícone do menu para dispositivos móveis */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Menu para dispositivos móveis */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleClose}>
                <Typography variant="inherit">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          
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

          {/* Botões de navegação para telas maiores */}
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