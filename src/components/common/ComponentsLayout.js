import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import React from 'react';
import CommonLayout from './CommonLayout';
import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';

const ComponentsLayout = ({ children }) => {
  const theme = useTheme();
  // FOR MOBILE RESPONSIVE
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CommonLayout>
      <Box sx={{ display: 'flex' }}>
        <Box>{matches ? <Sidebar /> : <MobileSidebar />}</Box>
        <Box sx={{ m: 5, width: '100%' }}>
            {children}
        </Box>
      </Box>
    </CommonLayout>
  )
}

export default ComponentsLayout;

