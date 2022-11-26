import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ComponentsLayout from '../common/ComponentsLayout';
import Loading from '../common/Loading';
import BookedModal from './BookedModal';

const Category = function () {
    const categoryId = useParams();

    //  Dialog Open and Close Action Start
    const [singleId, setSingleId] = React.useState('');
    const [singleData, setSingleData] = React.useState({});
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDialogViewOpen = (id) => {
        setDialogOpen(true);
        setSingleId(id);
    };
    //  Dialog Open and Close Action End

    // DATA LODE USE REACT QUERY
    const { data: loadData = [], isLoading } = useQuery({
        queryKey: ['loadData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/categories');
            const data = await res.json();
            return data
        }
    });

    React.useEffect( () =>{
        fetch(`http://localhost:8000/categories/${singleId}`)
        .then( res => res.json())
        .then(data => setSingleData(data));
    }, [singleId])

    if(isLoading){
        return <Loading />
    }

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
                          <Button fullWidth variant="contained" onClick={() => handleDialogViewOpen(item?._id)}>Book Now</Button>
                        </Box>
                      </Card>
                  </Grid>
                ))}
              </Grid>
          </Box>
          {/* BOOKED NOW MODAL OPEN  */}
          <BookedModal dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} loadData={singleData} />
        </ComponentsLayout>
    );
};

export default Category;
