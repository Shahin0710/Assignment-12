import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageMyProduct = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>My Product</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageMyProduct;
