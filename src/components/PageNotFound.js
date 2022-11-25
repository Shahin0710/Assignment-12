import { Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme();

const PageNotFound = function () {
    return (
        <>
        <ThemeProvider theme={theme}>
          <Grid container sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Stack justifyContent="center" sx={{ minHeight: '80vh' }}>
                    <Typography variant="h1" color="error" align="center" gutterBottom>
                        Sorry, Page Not Found !
                    </Typography>
                </Stack>
            </Grid>
          </Grid>
        </ThemeProvider>
        </>
    );
};

export default PageNotFound;
