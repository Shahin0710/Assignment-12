import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ComponentsLayout from './common/ComponentsLayout';

const PageBlog = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Typography>Page Blog</Typography>
          </Box>
        </ComponentsLayout>
    );
};

export default PageBlog;
