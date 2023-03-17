import React, { useContext, useEffect, useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@material-ui/core';
import useStyles from './Style';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../libs/commerce';
import { CommerceContext } from '../../CommerceProvider';

const steps = ['Adresse de livraison', 'Détails de paiement'];

const Checkout = () => {
  const { cart } = useContext(CommerceContext);
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const res = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        console.log('token:', res);
        setCheckoutToken(res);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const Confirmation = () => <div>Confirmation</div>;
  const Form = () =>
    activeStep === 0 ? (
      <AdressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h3" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
