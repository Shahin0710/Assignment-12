import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from '../common/ComponentsLayout';
import Advertised from './Advertised';
import TopBanner from './TopBanner';

const loadData =[
  { _id: 1, img: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg', name: '100cc Bike', category_id: '100' },
  { _id: 2, img: 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_960_720.jpg', name: '125cc Bike', category_id: '125' },
  { _id: 3, img: 'https://cdn.pixabay.com/photo/2014/09/07/22/33/motorbike-438464_960_720.jpg', name: '150cc Bike', category_id: '150' },
]

const PageHome = function () {
    const navigate = useNavigate();

    const handleCategoryView = (id) =>{
        navigate(`/category/${id}`);
    }

    return (
        <ComponentsLayout>
          <Box sx={{ mb: 5 }}>
            <TopBanner />
            <Advertised />
              <Grid container direction="row" spacing={4}>
                {loadData?.map((item) => (
                  <Grid item xs={12} md={4} key={item?._id}>
                      <Card sx={{ width: '100%' }}>
                          <CardMedia
                            component="img"
                            height="580"
                            image={item?.img}
                            alt={item?.name}
                          />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item?.name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="large" onClick={() => handleCategoryView(item?.category_id)}>View All</Button>
                        </CardActions>
                      </Card>
                  </Grid>
                ))}
              </Grid>
          </Box>
        </ComponentsLayout>
    );
};

export default PageHome;
