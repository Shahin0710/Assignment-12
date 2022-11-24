import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ComponentsLayout from './common/ComponentsLayout';

const theme = createTheme();

const PageLogin = () => {
    const navigate = useNavigate()
    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter valid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Minimum characters should be 6')
            .max(10, 'Maximum characters should be 10')
            .required('Password is required'),
    });

    const onSubmit = (values, props) => {
       console.log('Hello');
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
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} sx={{ mt: 1 }}>
              {(formik) => (
                <Form noValidate>
                  <Field
                    sx={{ mb: 5 }}
                    as={TextField}
                    name="email"
                    label="Email Address"
                    fullWidth
                    required
                    error={formik.errors.email && formik.touched.email}
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    name="password"
                    label="Enter Password"
                    fullWidth
                    required
                    error={formik.errors.password && formik.touched.password}
                    helperText={<ErrorMessage name="password" />}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/login" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
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
        // action={<AlertMessage handleClose={handleClose} />}
      />
    </ComponentsLayout>
  )
}

export default PageLogin;
