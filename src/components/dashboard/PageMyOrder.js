import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageMyOrder = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>My Order</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageMyOrder;
