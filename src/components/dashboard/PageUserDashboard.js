import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageUserDashboard = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>User Dashboard</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageUserDashboard;
