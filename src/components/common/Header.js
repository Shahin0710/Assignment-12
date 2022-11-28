import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext as SidebarContext } from '../../contexts/SidebarContext';
import { AuthContext as UserContext } from '../../contexts/UserContext';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const {handleSidebar} = React.useContext(SidebarContext);
  const {user, logOut} = React.useContext(UserContext);
  
  const handleSignOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error));
        navigate('/login');
  }

    // DATA LODE USE REACT QUERY
    const { data: loadData = [] } = useQuery({
        queryKey: ['loadData', 'users'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-sigma.vercel.app/users');
            const data = await res.json();
            return data
          }
        });

    const userRole = loadData.filter((option) => option.email === user?.email)

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
          {userRole[0]?.role === 'admin' ? 
            <Button color="inherit" sx={{ ml: 1.5 }} onClick={() => navigate('/admin_dashboard')}>Dashboard</Button>
              :
            <Box>
              {userRole[0]?.role === 'seller' ?
                <Box>
                  <Button color="inherit" sx={{ ml: 1.5 }} onClick={() => navigate('/my_product')}>My Product</Button>
                  <Button startIcon={<AddIcon />} color="inherit" sx={{ ml: 1.5 }} onClick={() => navigate('/add_product')}>Add</Button>
                </Box>
                  :
                <Button color="inherit" sx={{ ml: 1.5 }} onClick={() => navigate('/my_order')}>My Order</Button>
              }
            </Box>
          }

          {user?.email ? 
              <Button color="inherit" onClick={handleSignOut}>
                Log out
              </Button>
              :
            <>
              <Button color="inherit" onClick={() => navigate('/signup')}>
                Sign up
              </Button>
              <Button color="inherit" sx={{ ml: 1.5 }} onClick={() => navigate('/login')}>
                Sign in
              </Button>
            </>
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}