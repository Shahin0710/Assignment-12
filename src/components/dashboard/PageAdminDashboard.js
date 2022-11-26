import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageAdminDashboard = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>Admin Dashboard</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageAdminDashboard;
