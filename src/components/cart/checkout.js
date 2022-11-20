import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Box, Typography, Button, Paper, Grid, TextField } from '@mui/material';
import { cartSlice } from '../../store/cartSlice';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { productIncrement, postData } from '../../store/productSlice'
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
// import AlertComplete from './alert'
import '../../assets/style/checkout.css'


export function Alerts() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'rgba(109, 249, 140, 0.1)', borderRadius: '7px' }}>

      <Alert
        variant="outlined"
        severity="success"
        sx={{ mb: 2 }}
      >
        Order Complete- <strong>Thank you for your purchase!</strong>

      </Alert>

    </Box>
  );
}


function Checkout() {
  const dispatch = useDispatch();
  const [alert, useAlert] = useState('');


  const newItem = useSelector(state => state.products.updatedItem);
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((total, items) => total + items.price, 0)

  function deleteItem(id) {
    // console.log('delete cart is working', id)
    dispatch(productIncrement(id))
    dispatch(cartSlice.actions.deleteItem(id))
    dispatch(postData(newItem))
  }
  function ClearOut() {
    useAlert('');
  }

  setTimeout(ClearOut, 10000)


  function SubmitAlert() {
    useAlert(Alerts)
  }





  let cartArr = [];
  if (cartItems.length > 0) {
    cartArr = cartItems.map(item => (
      <>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>
              {item.name}
            </Typography>
            <Typography sx={{ marginLeft: '40px', color: 'rgb(60, 201, 226)' }}>
              ${item.price}
            </Typography>
          </Box>
          <Button sx={{ padding: '10px', borderRadius: '7px' }} onClick={() => deleteItem(item)}><DeleteTwoTone sx={{
            color: 'salmon', "& button:focus": { color: "salmon" },
            "& button:active": { color: "black" }
          }} /></Button>
        </Box>
        <div id='line-2' >
        </div>
      </>
    ))
  }
  return (

    <div id='container'>
      <Box sx={{ width: '70%', minHeight: '72vh', padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}  >
        <form >
          <Paper sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            <Box sx={{ width: '60%' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '40px' }}>
                Order Summary
              </Typography>
              <div id='mainBox'></div>
              {cartArr}
            </Box>

            <Typography sx={{ marginLeft: '600px', border: 'solid 2px', padding: '10px', borderRadius: '7px', borderColor: 'lightgray' }} >
              Total: ${total}
            </Typography>

            <Box elevation={6}>
              {alert}
            </Box>

            <Grid container spacing={2} sx={{ marginTop: '50px' }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom >
                  Billing Address
                </Typography>
                <TextField id="name" name="name" label="Full Name" />
                <TextField id="address" name="address" label="Address" />
                <TextField id="city" name="city" label="City" />
                <TextField id="state" name="state" label="State" />
                <TextField id="zip" name="zip" label="zip" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom >
                  Payment details
                </Typography>
                <TextField id="cc_number" name="cc_number" label="Credit Card #" />
                <TextField
                  id="date"
                  label="Expiration"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField id="cvv" name="cvv" label="CVV" />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justify="center" spacing={5}>
              <Grid item>

                <Button sx={{ color: 'salmon', marginTop: '20px' }} onClick={() => SubmitAlert()} >Place Your Order</Button>

              </Grid>



            </Grid>
          </Paper>
        </form>
      </Box>

    </div>

  )
}

export default Checkout;
