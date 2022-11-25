import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';
import Advertised from './Advertised';
import TopBanner from './TopBanner';

const PageHome = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <TopBanner />
            <Advertised />
            <Typography>Page Home</Typography>
            <Typography>Page Home</Typography>
            <Typography>Page Home</Typography>
            <Typography>Page Home</Typography>
            <Typography>Page Home</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageHome;
