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
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../libs/commerce';
import { CommerceContext } from '../../CommerceProvider';
import { Link, useNavigate } from 'react-router-dom';

const steps = ['Adresse de livraison', 'Détails de paiement'];

const Checkout = () => {
  const { cart, handleCaptureCheckout, order, error, refreshCart } =
    useContext(CommerceContext);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const classes = useStyles();
  const nagigate = useNavigate();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const res = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        // console.log('token:', res);
        setCheckoutToken(res);
      } catch (error) {
        // if (activeStep !== steps.length) nagigate('/suits');
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(shippingData);
    console.log('Data:', data);
    nextStep();
  };

  // console.log('shipiData', shippingData);

  const timeOut = () => {
    setTimeout(() => {
      setIsFinished(true);
      refreshCart();
    }, 3000);
  };

  let Confirmation = () =>
    // order.customer ? (
    //   <>
    //     <div>
    //       <Typography variant="h5">
    //         Merci pour votre achat, {order.customer.firstname}{' '}
    //         {order.customer.lastname}!
    //       </Typography>
    //       <Divider className={classes.divider} />
    //       <Typography variant="subtitle2">
    //         Référence de commande: {order.customer_reference}
    //       </Typography>
    //     </div>
    //     <br />
    //     <Button component={Link} variant="outlined" type="button" to="/">
    //       Retour à l'accueil
    //     </Button>
    //   </>
    // ) :
    isFinished ? (
      <>
        <div>
          <Typography variant="h5">Merci pour votre achat !</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Retour à l'accueil
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Retour à l'accueil
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        setShippingData={setShippingData}
        next={next}
      />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        order={order}
        error={error}
        timeOut={timeOut}
      />
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
