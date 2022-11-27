import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
// import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';
import Loading from '../common/Loading';

const PageAdminDashboard = function () {

    // DATA LODE USE REACT QUERY
    const { data: loadData = [], isLoading } = useQuery({
        queryKey: ['loadData', 'users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/users');
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
      return <Loading />
    }

    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
          <Typography variant="h5" align="center" gutterBottom>
            All Seller And Bayer
          </Typography>
          {loadData?.length === 0 ? (
                <Box sx={{ my: 15 }}>
                <Typography variant="h5" color="error" align="center" gutterBottom>
                    There is No Data !
                </Typography>
                </Box>
          ) : (
              <Box>
                <Box sx={{ my: 5 }}>
                    <Grid container spacing={4}>
                        {loadData?.map((item) => (
                          <Grid item xs={12} md={6} key={item?._id}>
                              <Card sx={{ maxWidth: "full", mb: 2.5 }}>
                                <CardHeader
                                  avatar={
                                    <Avatar alt="P" />
                                  }
                                  title={item?.name}
                                />
                                <CardContent>
                                  <Typography variant="body3">
                                    Email: {item?.email}
                                  </Typography>
                                  <Box sx={{ mt: 2 }}>
                                    <FormGroup>
                                      <FormControlLabel disabled control={<Checkbox color="default" defaultChecked={item?.role === 'admin' ? true : false} />} label="Admin" />
                                      <FormControlLabel disabled control={<Checkbox color="default" defaultChecked={item?.role === 'seller' ? true : false} />} label="Seller" />
                                      <FormControlLabel disabled control={<Checkbox color="default" defaultChecked={item?.role === 'bayer' ? true : false} />} label="Bayer" />
                                    </FormGroup>
                                  </Box>
                                </CardContent>
                                <CardActions sx={{ mb: 2 }}>
                                  <Stack direction="row" spacing={2}>
                                    <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                  </Stack>
                                </CardActions>
                              </Card>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                  {/* DELETE DIALOG BOX OPEN */}
                {/* <DeleteDialogBoxOpen deleteOpenBox={deleteOpenBox} handleDeleteNo={handleDeleteNo} handleDeleteYes={handleDeleteYes} /> */}
                  {/* DELETE SUCCESS MASSAGE */}
                {/* <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={massage}
                    action={<AlertMessage handleClose={handleClose} />}
                />  */}
              </Box>
          )}
          </Box>
        </ComponentsLayout>
    );
};

export default PageAdminDashboard;
