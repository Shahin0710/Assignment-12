import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Grid, MenuItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/UserContext';
import useToken from '../hooks/useToken';
import AlertMessage from './common/AlertMessage';
import ComponentsLayout from './common/ComponentsLayout';

const theme = createTheme();

const userRole = [
    {
        value: 'seller',
        label: 'As a Seller',
    },
    {
        value: 'bayer',
        label: 'As a Bayer',
    },
];

const PageSignup = () => {
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, updateUserProfile } = React.useContext(AuthContext);

    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const [createdUserEmail, setCreatedUserEmail] = React.useState('')
    const [token] = useToken(createdUserEmail);

    if(token){
      navigate('/');
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

    const initialValues = {
        name: '',
        photoURL: '',
        email: '',
        role: '',
        password: '',
        re_password: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Minimum characters should be 3')
            .max(30, 'Maximum characters should be 30')
            .required('Name is required'),
        photoURL: Yup.string()
            .min(3, 'Minimum characters should be 3')
            .max(500, 'Maximum characters should be 500')
            .required('Name is required'),
        email: Yup.string().email('Enter valid email').required('Email is required'),
        role: Yup.string().required('This is required'),
        password: Yup.string()
            .min(6, 'Minimum characters should be 6')
            .max(10, 'Maximum characters should be 10')
            .required('Password is required'),
        re_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Password does not matches')
            .required('Re_type password is required'),
    });

    const handleSubmit = (values, props) => {
        const formReset = () => {
            props.resetForm();
        };
      const name = values.name;
      const photoURL = values.photoURL;
      const email = values.email;
      const role = values.role;
      const password = values.password;
      
      createUser(email, password)
          .then(result => {
              formReset();
              handleUpdateUserProfile(name, photoURL);
              saveUser(role, email, name);
          })
          .catch(error => {
              setMassage(error.message);
              formReset();
              setSnackbarOpen(true);
          })
    };

      const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }
      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
    }

     const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then( result => {
          const user = result.user;
          console.log(user);
      })
      .catch(error => console.error(error));
    }

    const saveUser = (role, email, name) =>{
      const user ={role, email, name};
      fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          setCreatedUserEmail(email);
      })
    }

  return (
    <ComponentsLayout>
    <Box sx={{ my: 5 }}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                   <LockOutlinedIcon />
                 </Avatar>
                 <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
                   Sign up
                 </Typography>
                  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {(formik) => (
                      <Form noValidate>
                        <Box>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              name="name"
                              required
                              fullWidth
                              label="User Name"
                              error={formik.errors.name && formik.touched.name}
                              helperText={<ErrorMessage name="name" />}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              name="photoURL"
                              required
                              fullWidth
                              label="User Photo url"
                              error={formik.errors.photoURL && formik.touched.photoURL}
                              helperText={<ErrorMessage name="photoURL" />}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              name="email"
                              required
                              fullWidth
                              label="Email Address"
                              error={formik.errors.email && formik.touched.email}
                              helperText={<ErrorMessage name="email" />}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                          <Field
                              as={TextField}
                              select
                              label="Your Role"
                              fullWidth
                              required
                              name="role"
                              error={formik.errors.role && formik.touched.role}
                              helperText={<ErrorMessage name="role" />}
                          >
                              {userRole.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                  </MenuItem>
                              ))}
                          </Field>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              name="password"
                              required
                              fullWidth
                              label="password"
                              type="password"
                              error={formik.errors.password && formik.touched.password}
                              helperText={<ErrorMessage name="password" />}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              name="re_password"
                              required
                              fullWidth
                              label="Re-password"
                              type="password"
                              error={formik.errors.re_password && formik.touched.re_password}
                              helperText={<ErrorMessage name="re_password" />}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={<Checkbox value="allowExtraEmails" color="primary" />}
                              label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="/login" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 3 }}>
                          <Grid item xs>
                            <Button onClick={handleGoogleSignIn} size="small" startIcon={<GoogleIcon />}>Sign Up With Google</Button>
                          </Grid>
                          <Grid item>
                            {''}
                          </Grid>
                        </Grid>
                        </Box>
                    </Form>
                    )}
                  </Formik>
          </Box>
      </ThemeProvider>
    </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={massage}
        action={<AlertMessage handleClose={handleClose} />}
      />
    </ComponentsLayout>
  )
}

export default PageSignup;
