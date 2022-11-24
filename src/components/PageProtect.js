import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from './common/ComponentsLayout';

const PageProtect = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Typography>Page Protect</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageProtect;
