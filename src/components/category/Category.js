import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ComponentsLayout from '../common/ComponentsLayout';
import BookedModal from './BookedModal';

const loadData =[
  { _id: 1, img: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg', item_name: '100cc Bike', category_id: '100', location: 'Dhaka', sale_price: '100', org_price: '200', use_year: '1', posted_time: '01:55', seller: 'Mr Hanif', seller_email: 'sss.10@mail.com' },
  { _id: 2, img: 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_960_720.jpg', item_name: '125cc Bike', category_id: '125', location: 'Barishal', sale_price: '200', org_price: '300', use_year: '1.5', posted_time: '03:50', seller: 'Mr Sharif', seller_email: 'sss.20@mail.com' },
  { _id: 3, img: 'https://cdn.pixabay.com/photo/2014/09/07/22/33/motorbike-438464_960_720.jpg', item_name: '150cc Bike', category_id: '150', location: 'Jasar', sale_price: '250', org_price: '280', use_year: '1.2', posted_time: '05:32', seller: 'Mr Alif', seller_email: 'sss.10@mail.com' },
]

const Category = function () {
    const categoryId = useParams();

    //  Dialog Open and Close Action Start
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogDataLoading, setDialogDataLoading] = React.useState(false);

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDialogViewOpen = () => {
        setDialogOpen(true);
        // setDialogDataLoading(true);
    };
    //  Dialog Open and Close Action End

    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
              <Grid container direction="row" spacing={4}>
                {loadData?.filter((option) => option?.category_id === categoryId?.id).map((item) => (
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
                        <Box display="flex" justifyContent="center" sx={{ mx: 2.5, mb: 2.5 }}>
                          <Button fullWidth variant="contained" onClick={handleDialogViewOpen}>Book Now</Button>
                        </Box>
                      </Card>
                  </Grid>
                ))}
              </Grid>
          </Box>
          {/* BOOKED NOW MODAL OPEN  */}
          <BookedModal dialogDataLoading={dialogDataLoading} dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} loadData={loadData[0]} />
        </ComponentsLayout>
    );
};

export default Category;
