import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentsLayout from '../common/ComponentsLayout';
import Loading from '../common/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const categoryId = useParams();

    // DATA LODE USE REACT QUERY
    const { data: loadData = {}, isLoading } = useQuery({
        queryKey: ['loadData', categoryId?.id],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side-sigma.vercel.app/categories/${categoryId?.id}`);
            const data = await res.json();
            return data
        }
    });

    console.log(loadData);

    if(isLoading){
        return <Loading />
    }

  return (
    <ComponentsLayout>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Payment</Typography>
      <Elements stripe={stripePromise}>
          <CheckoutForm />
      </Elements>
    </ComponentsLayout>
  )
}

export default Payment;
