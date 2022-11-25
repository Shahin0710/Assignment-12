import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import ComponentsLayout from './common/ComponentsLayout';

const theme = createTheme();

const PageReport = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <ThemeProvider theme={theme}>
              <Grid container sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/10/25/11/07/business-4576778_960_720.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <Box sx={{ m: 5 }}>
                      <Box sx={{ paddingBottom: { xs: 1, sm: 1 } }}>
                          <Typography variant="h3" sx={{ pt: { xs: 1, md: 0 }, mx: 2, mt: 5, fontWeight: '600' }}>
                              Report a Problem
                          </Typography>
                          <Typography variant="h5" sx={{ pt: { xs: 1, md: 0 }, mx: 2, my: 2, fontWeight: '200' }}>
                              Based on build and profile, your feedback will be public 
                              and visible to external users.
                          </Typography>
                      </Box>
                      <Grid container spacing={3}>
                          <Grid item xs={12}>
                              <TextField
                                  label="Title"
                                  name="title"
                                  fullWidth
                                  required
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                  label="Description"
                                  name="description"
                                  multiline
                                  minRows={6}
                                  fullWidth
                                  required
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <Button variant="contained" sx={{ mt: 2}}>Sent</Button>
                          </Grid>
                      </Grid>
                  </Box>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Box>
        </ComponentsLayout>
    );
};

export default PageReport;
