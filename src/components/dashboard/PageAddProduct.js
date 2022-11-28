import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const PageAddProduct = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>Add Product</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageAddProduct;
