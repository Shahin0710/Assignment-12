import { Backdrop, Box, CircularProgress } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Loading = () => {
  return (
    <>
    <ComponentsLayout>
      <Box sx={{ my: 50 }}>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </ComponentsLayout>
    </>
  )
}

export default Loading;