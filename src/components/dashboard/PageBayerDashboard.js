import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageBayerDashboard = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>Bayer Dashboard</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageBayerDashboard;
