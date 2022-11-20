import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../store/cartSlice';
import { productSlice, postData } from '../../store/productSlice';
import { showDetail } from '../../store/detailSlice'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';

//------------ INLINE STYLING ----------------//


const styles = {
  mainBox: {
    background: 'rgba(210, 210, 210, 0.777)',
    borderRadius: '7px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '20px'
  },
  box: {

    padding: '20px'
  },
  card: {
    margin: '20px',
    padding: '20px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgb(60, 201, 226,0.39) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
  }
}



function Products() {
  const dispatch = useDispatch();
  const newItem = useSelector(state => state.products.updatedItem);

  //---------------SENNDING TO MONGO-DB--------------//
  function getNewItem() {
    dispatch(postData(newItem))
  }

  //----------------- ADD TO ACRT HANDLER -----------------//
  function handleAddToCart(data) {
    if (data.inventory === 0) {
      console.log(data.name, 'Out of Stock')
    } else {
      dispatch(productSlice.actions.productDecrement(data))
      dispatch(cartSlice.actions.addToCart(data))
    }

    getNewItem()
  }


  function handleShowItem(data) {
    dispatch(showDetail(data))
  }


  const products = useSelector(state => state.products.productSelected);

  let productArr = [];

  if (products.length > 0) {
    productArr = products.map(item => (
      <Card key={item._id} sx={styles.card}>
        <CardMedia image={item.image} sx={{ height: '180px', width: '180px', borderRadius: '4px' }} />
        <Box sx={styles.box}>
          <Typography>
            {item.name}
          </Typography>
          <hr />
          <Typography>
            Cost: ${item.price}
          </Typography>
          <>````````````````````````</>
          <Stack direction="row" spacing={2}>
            <Button sx={{ color: 'salmon' }} value={item} onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            <Button href={`/details/${item._id}`} sx={{ color: 'lightblue' }} value={item} onClick={() => handleShowItem(item)}>Details</Button>
          </Stack>
        </Box>
      </Card>
    ))
  }


  return (
    <Box sx={styles.mainBox}>
      {productArr}
    </Box>
  )
}
export default Products;