import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/UserContext';
import AlertMessage from '../common/AlertMessage';
import Loading from '../common/Loading';

const BookedModal = function ({ dialogOpen, handleDialogClose, singleId }) {
    // const navigate = useNavigate();
    const {user} = React.useContext(AuthContext);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

    // DATA LODE USE REACT QUERY
    const { data: loadData = {}, isLoading } = useQuery({
        queryKey: ['loadData', singleId],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side-sigma.vercel.app/categories/${singleId}`);
            const data = await res.json();
            return data
        }
    });

    const initialValues = {
        seller_name: user?.displayName,
        seller_email: user?.email,
        item_name: loadData?.item_name,
        price: loadData?.sale_price,
        phone: '',
        meeting_location: '',
    };

    const validationSchema = Yup.object().shape({
        phone: Yup.string()
        .min(11, 'Minimum characters should be 11')
        .max(12, 'Maximum characters should be 12')
        .required('This is required'),
        meeting_location: Yup.string()
        .min(10, 'Minimum characters should be 10')
        .max(50, 'Maximum characters should be 50')
        .required('This is required'),
    });

    const onSubmit = (values, props) => {
        const formReset = () => {
            props.resetForm();
        };

        const phone = values.phone;
        const meeting_location = values.meeting_location;
        console.log(phone);      
        console.log(meeting_location);
        formReset();
        handleDialogClose();
        setSnackbarOpen(true);
        localStorage.setItem('bookedItem', singleId);
        // navigate('/my_order');
    }

    if(isLoading){
        return <Loading />
    }
    
    return (
        <>
          <Dialog open={dialogOpen} onClose={() => handleDialogClose()}>
              <DialogTitle>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h5">Book Now Your Product</Typography>
                      <IconButton onClick={handleDialogClose}>
                          <CloseIcon />
                      </IconButton>
                  </Stack>
              </DialogTitle>
              <DialogContent dividers>
                  <DialogContentText>
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} sx={{ mt: 1 }}>
                        {(formik) => (
                          <Form noValidate>
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="seller_name"
                              label="User Name"
                              disabled
                              fullWidth
                            />
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="seller_email"
                              label="User Email"
                              disabled
                              fullWidth
                            />
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="item_name"
                              label="Item Name"
                              disabled
                              fullWidth
                            />
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="price"
                              label="Item Price"
                              disabled
                              fullWidth
                            />
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="meeting_location"
                              label="Location"
                              fullWidth
                              required
                              error={formik.errors.meeting_location && formik.touched.meeting_location}
                              helperText={<ErrorMessage name="meeting_location" />}
                            />
                            <Field
                              sx={{ mb: 5 }}
                              as={TextField}
                              name="phone"
                              label="Phone"
                              fullWidth
                              required
                              error={formik.errors.phone && formik.touched.phone}
                              helperText={<ErrorMessage name="phone" />}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                            >
                              Submit
                            </Button>
                          </Form>
                          )}
                      </Formik>
                  </Box>
                  </DialogContentText>
              </DialogContent>
          </Dialog>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            message='Successfully Submitted'
            action={<AlertMessage handleClose={handleClose} />}
          />
        </>
    );
};

export default BookedModal;
