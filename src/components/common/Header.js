import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AuthContext } from '../../contexts/SidebarContext';

export default function ButtonAppBar() {

  const {handleSidebar} = React.useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleSidebar}
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bye & Sell
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}