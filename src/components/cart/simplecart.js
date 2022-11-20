import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Button, Link } from '@mui/material';
import { showDetail } from '../../store/detailSlice'
import { productIncrement, postData } from '../../store/productSlice'
import { cartSlice } from '../../store/cartSlice';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import '../../assets/style/simpleCart.css'



function Simplecart() {
  const dispatch = useDispatch();

  const newItem = useSelector(state => state.products.updatedItem);

  const cartItems = useSelector(state => state.cart.cartItems);
  function deleteItem(item) {
    // console.log('delete cart is working', item)


    dispatch(productIncrement(item))
    dispatch(cartSlice.actions.deleteItem(item))
    dispatch(postData(newItem))
  }

  function handleShowItem(data) {
    dispatch(showDetail(data))
    // localStorage.setItem("detailedItem", data);
  }



  let cartArr = [];

  if (cartItems.length > 0) {
    cartArr = cartItems.map(item => (
      <Card key={item._id} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: '7px', padding: '10px', minWidth: '300px' }}>
        <Box >
          <Link href={`/details/${item._id}`} value={item} onClick={() => handleShowItem(item)} sx={{ color: 'grey' }} >
            {item.name}
          </Link>
        </Box>
        <Button sx={{ padding: '10px', borderRadius: '7px' }} onClick={() => deleteItem(item)}><DeleteTwoTone sx={{
          color: 'salmon', "& button:focus": { color: "salmon" },
          "& button:active": { color: "black" }
        }} /></Button>
      </Card>
    ))
  }
  return (
    <Box id='simpleCartBox' sx={{
      position: 'absolute', zIndex: '10', left: '1400px', top: '80px', borderRadius: '7px', borderColor: 'lightgray', padding: '10px'

    }}>
      {cartArr}
    </Box>
  )
}

export default Simplecart;
