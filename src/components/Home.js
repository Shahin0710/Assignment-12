import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Home = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Typography>Home</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default Home;
