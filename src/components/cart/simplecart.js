import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, Typography } from '@mui/material';

function Simplecart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  let cartArr = [];
  console.log('CART-ITEMS-SIMPLE', cartItems)
  if (cartItems.length > 0) {
    cartArr = cartItems.map(item => (
      <Card key={item.id} sx={{ borderRadius: '2px', padding: '10px' }}>
        <Box >
          <Typography>
            {item.name}
          </Typography>
        </Box>
      </Card>
    ))
  }
  return (
    <Box sx={{ position: 'absolute', zIndex: '10', left: '1400px', top: '80px' }}>
      {cartArr}
    </Box>
  )
}

export default Simplecart;
