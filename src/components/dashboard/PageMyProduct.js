import CastIcon from '@mui/icons-material/Cast';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { AuthContext } from '../../contexts/UserContext';
import AlertMessage from '../common/AlertMessage';
import ComponentsLayout from '../common/ComponentsLayout';
import DeleteDialogBoxOpen from '../common/DeleteDialogBoxOpen';
import Loading from '../common/Loading';

const PageMyProduct = function () {
    const { user } = React.useContext(AuthContext);

    // DATA LODE USE REACT QUERY
    const { data: loadData = [], isLoading, refetch } = useQuery({
        queryKey: ['loadData', 'categories'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-sigma.vercel.app/categories');
            const data = await res.json();
            return data
        }
    });

    //  DELETE DIALOG BOX OPEN ACTION
    const [deleteOpenBox, setDeleteOpenBox] = React.useState(false);
    const [serviceId, setServiceId] = React.useState('');

    const handleDeleteNo = () => {
        setDeleteOpenBox(false);
    };

    const handleDeleteYes = () => {
        fetch(`https://resale-market-server-side-sigma.vercel.app/categories/delete/${serviceId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch();
            setDeleteOpenBox(false);
            setMassage('Successfully Deleted');
            setSnackbarOpen(true);
        });
    };

    const handleDelete = (id) => {
        setServiceId(id);
        setDeleteOpenBox(true);
    };
    //  DELETE DIALOG BOX CLOSE ACTION
    
    //  DELETE SUCCESS ALERT ACTION START
    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };
    //  DELETE SUCCESS ALERT ACTION END

    if(isLoading){
        return <Loading />
    }

    return (
    <ComponentsLayout>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>My Product {loadData?.filter((option) => option?.seller_email === user?.email).length}</Typography>
            <Grid container direction="row" spacing={4}>
              {loadData?.filter((option) => option?.seller_email === user?.email).map((item) => (
                <Grid item xs={12} md={4} key={item?._id}>
                    <Card sx={{ width: '100%' }}>
                        <CardMedia
                          component="img"
                          height="580"
                          image={item?.img}
                          alt={item?.item_name}
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item?.item_name}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
                            <Button variant="outlined" size="small" color="secondary" startIcon={<CastIcon />}>Advertise</Button>
                            <Button onClick={() => handleDelete(item?._id)} variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                        </Stack>
                        <Box display="flex" justifyContent="space-between">
                            <Typography gutterBottom variant="h6" component="div">
                              Location:
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                              {item?.location}
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography gutterBottom variant="h6" component="div">
                            Price:
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {item?.sale_price}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography gutterBottom variant="h6" component="div">
                            Original Price:
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {item?.org_price}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography gutterBottom variant="h6" component="div">
                            Use of year:
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {item?.use_year}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography gutterBottom variant="h6" component="div">
                            Posted Time:
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {item?.posted_time}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography gutterBottom variant="h6" component="div">
                            Seller Name:
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {item?.seller}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                </Grid>
              ))}
            </Grid>
        </Box>
        {/* DELETE DIALOG BOX OPEN */}
        <DeleteDialogBoxOpen deleteOpenBox={deleteOpenBox} handleDeleteNo={handleDeleteNo} handleDeleteYes={handleDeleteYes} />
        {/* DELETE SUCCESS MASSAGE */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message={massage}
          action={<AlertMessage handleClose={handleClose} />}
        /> 
    </ComponentsLayout>
    );
};

export default PageMyProduct;
