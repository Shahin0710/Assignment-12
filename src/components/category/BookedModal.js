import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, CircularProgress, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

const BookedModal = function ({ dialogDataLoading, dialogOpen, handleDialogClose, loadData }) {
   
    const initialValues = {
        seller_name: loadData?.seller,
        seller_email: loadData?.seller_email,
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
    }

    return (
        <>
        {dialogDataLoading ? (
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={dialogDataLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        ) : (
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
                                label="Seller Name"
                                disabled
                                fullWidth
                              />
                              <Field
                                sx={{ mb: 5 }}
                                as={TextField}
                                name="seller_email"
                                label="Seller Email"
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
        )}
        </>
    );
};

export default BookedModal;
