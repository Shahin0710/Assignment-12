import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';

const AddSeller = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <Typography>Add seller</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default AddSeller;
