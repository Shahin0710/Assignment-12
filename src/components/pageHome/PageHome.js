import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from '../common/ComponentsLayout';
import Loading from '../common/Loading';
import Advertised from './Advertised';
import TopBanner from './TopBanner';

const PageHome = function () {
    const navigate = useNavigate();

    const handleCategoryView = (id) =>{
      navigate(`/category/${id}`);
    }

    // DATA LODE USE REACT QUERY
    const { data: loadData = [], isLoading } = useQuery({
        queryKey: ['loadData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/service');
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
