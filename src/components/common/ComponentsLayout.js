import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import React from 'react';
import CommonLayout from './CommonLayout';
import Sidebar from './Sidebar';

const ComponentsLayout = ({ children }) => {
  const theme = useTheme();
  // FOR MOBILE RESPONSIVE
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        {matches && <Sidebar />}
        <Box sx={{ m: 5, width: '100%' }}>
          {children}
        </Box>
      </Box>
    </CommonLayout>
  )
}

export default ComponentsLayout;

