import { Box, Grid, MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/UserContext';
import AlertMessage from '../common/AlertMessage';
import ComponentsLayout from '../common/ComponentsLayout';

const productCategory = [
    {
        value: '150',
        label: '150cc Bike',
    },
    {
        value: '125',
        label: '125cc Bike',
    },
    {
        value: '100',
        label: '100cc Bike',
    },
];

const productCondition = [
    {
        value: 'good',
        label: 'Good',
    },
    {
        value: 'excellent',
        label: 'Excellent',
    },
    {
        value: 'fair',
        label: 'Fair',
    },
];

const PageAddProduct = function () { 
    // const navigate = useNavigate();
    const { user } = React.useContext(AuthContext);
    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

    const initialValues = {
        item_name: '',
        img: '', 
        category_id: '', 
        condition: '', 
        sale_price: '', 
        org_price: '', 
        mobile: '',
        location: '',
        use_year: '', 
        description: '', 
    };

    const validationSchema = Yup.object().shape({
        item_name: Yup.string()
            .min(10, 'Minimum characters should be 10')
            .max(50, 'Maximum characters should be 50')
            .required('This Field is required'),
        img: Yup.string().required('This Field is required'),
        category_id: Yup.string().required('This Field is required'),
        condition: Yup.string().required('This Field is required'),
        sale_price: Yup.number().min(9999, 'Minimum number must be 5').max(9999999, 'Maximum number must be 7').required('This is required'),
        org_price: Yup.number().min(9999, 'Minimum number must be 5').max(9999999, 'Maximum number must be 7').required('This is required'),
        mobile: Yup.string()
              .min(8, 'Minimum characters should be 8')
              .max(11, 'Maximum characters should be 11')
              .required('This Field is required'),
        location: Yup.string()
              .min(10, 'Minimum characters should be 10')
              .max(50, 'Maximum characters should be 50')
              .required('This Field is required'),
        use_year: Yup.number().min(0, 'Minimum number must be 0').max(100, 'Maximum number must be 100').required('This is required'),
        description: Yup.string()
            .min(10, 'Minimum characters should be 10')
            .max(100, 'Maximum characters should be 100')
            .required('This Field is required'),
    });

    const handleSubmit = (values, props) => {
          const formReset = () => {
              props.resetForm();
          };
          const item_name = values.item_name;
          const img = values.img; 
          const category_id = values.category_id; 
          const sale_price = values.sale_price; 
          const org_price = values.org_price; 
          const condition = values.condition; 
          const mobile = values.mobile;
          const location = values.location;
          const description = values.description; 
          const use_year = values.use_year; 
          const posted_time = new Date().getFullYear(); 
          const seller = user?.displayName; 
          const seller_email = user?.email;

          saveProduct(item_name, category_id, sale_price, org_price, condition , mobile, location, description , use_year, img, posted_time, seller, seller_email);
          formReset();
          setMassage('Successfully added');
          setSnackbarOpen(true);
    };

    const saveProduct = (item_name, category_id, sale_price, org_price, condition , mobile, location, description , use_year, img, posted_time, seller, seller_email) =>{
      const product ={item_name, category_id, sale_price, org_price, condition , mobile, location, description , use_year, img, posted_time, seller, seller_email};
      // fetch('http://localhost:8000/users', {
      //     method: 'POST',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(product)
      // })
      // .then(res => res.json())
      // .then(data =>{
      //   console.log(data);
      // })
      console.log(product);
    }

    return (
      <ComponentsLayout>
      <Box sx={{ my: 5 }}>
        <Box
          sx={{
            mx: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Add A Product</Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {(formik) => (
                  <Form noValidate>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="item_name"
                            required
                            fullWidth
                            label="Item Name"
                            error={formik.errors.item_name && formik.touched.item_name}
                            helperText={<ErrorMessage name="item_name" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="img"
                            required
                            fullWidth
                            label="Product Photo url"
                            error={formik.errors.img && formik.touched.img}
                            helperText={<ErrorMessage name="img" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Field
                            as={TextField}
                            select
                            label="Select Category"
                            fullWidth
                            required
                            name="category_id"
                            error={formik.errors.category_id && formik.touched.category_id}
                            helperText={<ErrorMessage name="category_id" />}
                        >
                            {productCategory.map((option, index) => (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Field>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Field
                            as={TextField}
                            select
                            label="Condition"
                            fullWidth
                            required
                            name="condition"
                            error={formik.errors.condition && formik.touched.condition}
                            helperText={<ErrorMessage name="condition" />}
                        >
                            {productCondition.map((option, index) => (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Field>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="sale_price"
                            type="number"
                            required
                            fullWidth
                            label="Sale Price"
                            error={formik.errors.sale_price && formik.touched.sale_price}
                            helperText={<ErrorMessage name="sale_price" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="org_price"
                            type="number"
                            required
                            fullWidth
                            label="Original Price"
                            error={formik.errors.org_price && formik.touched.org_price}
                            helperText={<ErrorMessage name="org_price" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="mobile"
                            required
                            fullWidth
                            label="Contact Number"
                            error={formik.errors.mobile && formik.touched.mobile}
                            helperText={<ErrorMessage name="mobile" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="location"
                            required
                            fullWidth
                            label="Location"
                            error={formik.errors.location && formik.touched.location}
                            helperText={<ErrorMessage name="location" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="use_year"
                            required
                            fullWidth
                            type="number"
                            label="Use of Year"
                            error={formik.errors.use_year && formik.touched.use_year}
                            helperText={<ErrorMessage name="use_year" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="description"
                            required
                            fullWidth
                            number
                            label="Description"
                            error={formik.errors.description && formik.touched.description}
                            helperText={<ErrorMessage name="description" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ display: 'flex' }}>
                            <Button type="submit" variant="contained" sx={{ mr: 3 }}>Submit</Button>
                            <Button variant="contained">Cancel</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Form>
              )}
          </Formik>
        </Box>
      </Box>
      {/* SNACKBAR MASSAGE  */}
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

export default PageAddProduct;
