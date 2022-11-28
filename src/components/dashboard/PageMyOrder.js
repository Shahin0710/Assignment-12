import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import ComponentsLayout from '../common/ComponentsLayout';
import Loading from '../common/Loading';

const PageMyOrder = function () {
    const bookedItemIt = localStorage.getItem('bookedItem');

    // DATA LODE USE REACT QUERY
    const { data: loadData = [], isLoading } = useQuery({
        queryKey: ['loadData', 'categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/categories');
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading />
    }

   
    return (
      <ComponentsLayout>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>My Order...</Typography>
            <Grid container direction="row" spacing={4}>
              {loadData?.filter((option) => option?._id === bookedItemIt).map((item) => (
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
                            <Button onClick={() => (item?._id)} variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Delete</Button>
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
      </ComponentsLayout>
    );
};

export default PageMyOrder;
