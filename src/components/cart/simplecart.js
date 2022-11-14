import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { store } from '../../store/store'
import { Box, Card, Button, Link } from '@mui/material';
import { showDetail } from '../../store/detailSlice'
import { cartSlice } from '../../store/cartSlice';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';


function Simplecart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  function deleteItem(id) {
    dispatch(cartSlice.actions.deleteItem(id))
  }
  function handleShowItem(data) {
    dispatch(showDetail(data))
    // localStorage.setItem("detailedItem", data);
  }



  let cartArr = [];

  if (cartItems.length > 0) {
    cartArr = cartItems.map(item => (
      <Card key={item.id} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: '7px', padding: '10px', minWidth: '300px' }}>
        <Box >
          <Link href={`/details/${item.id}`} value={item} onClick={() => handleShowItem(item)} sx={{ color: 'grey' }} >
            {item.name}
          </Link>
        </Box>
        <Button sx={{ padding: '10px', borderRadius: '7px' }} onClick={() => deleteItem(item.id)}><DeleteTwoTone sx={{
          color: 'salmon', "& button:focus": { color: "salmon" },
          "& button:active": { color: "black" }
        }} /></Button>
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
