import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, Paper, Grid, TextField } from '@mui/material';
import { cartSlice } from '../../store/cartSlice';
import { productIncrement, postData } from '../../store/productSlice'
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import '../../assets/style/checkout.css'

function Checkout() {
  const dispatch = useDispatch();

  const newItem = useSelector(state => state.products.updatedItem);

  function deleteItem(id) {
    // console.log('delete cart is working', id)
    dispatch(productIncrement(id))
    dispatch(cartSlice.actions.deleteItem(id))
    dispatch(postData(newItem))
  }

  const cartItems = useSelector(state => state.cart.cartItems);
  // console.log('items in checkout---->', cartItems)
  const total = cartItems.reduce((total, items) => total + items.price, 0)


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
                <Button sx={{ color: 'salmon', marginTop: '20px' }}  >Place Your Order</Button>
              </Grid>



            </Grid>
          </Paper>
        </form>
      </Box>

    </div>

  )
}

export default Checkout;
