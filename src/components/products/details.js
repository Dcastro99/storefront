import React from 'react';
import { useDispatch } from 'react-redux';
import { productSlice, postData } from '../../store/productSlice';
import { cartSlice } from '../../store/cartSlice';
import { useSelector } from 'react-redux'
import { Box, Button, Card, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../assets/style/detail.css'



function Details() {
  const dispatch = useDispatch();

  //------------------PULLING FROM SLICE------------------//
  const singleDetailItem = useSelector(state => state.detail.detailItems);

  function handleAddToCart(data) {
    if (data.inventory === 0) {
      console.log(data.name, 'Out of Stock')
    } else {
      let itemPrice = data.inventory
      const y = itemPrice--;
      let itemPicked = {
        _id: data._id,
        name: data.name,
        category: data.category,
        image: data.image,
        price: data.price,
        inventory: itemPrice,
        description: data.description,
      }
      dispatch(postData(itemPicked))
      dispatch(productSlice.actions.productDecrement(data))
      dispatch(cartSlice.actions.addToCart(data))
    }

  }

  let results = [];
  if (singleDetailItem.length > 0) {
    results = singleDetailItem.map(item => (

      <div id='MainDiv'>

        <Box sx={{ fontSize: '60px' }}> {item.name}</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', width: '600px' }}>
          <Card key={item._id} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
            <CardMedia image={item.image} sx={{ height: '500px', width: '500px', borderRadius: '4px' }} />
            <div id='detailInfo'>
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                {item.category}
              </Typography>
              <div id='line-1' >
                <hr />

              </div>
              <Typography >
                Cost: ${item.price}
              </Typography>
              <>````````````````````````</>
            </div>

          </Card>
          <Button href={`/checkout`} sx={{ color: 'salmon', backgroundColor: 'lightgrey', marginTop: '20px' }} value={item} onClick={() => handleAddToCart(item)}>Buy</Button>
          <Typography variant="subtitle1" sx={{ fontSize: '40px', marginTop: '30px' }}>
            Product Details
          </Typography>
          <Accordion sx={{ borderRadius: '5px' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>Product Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={5} sx={{ borderRadius: '5px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '15px' }}>Inventory</Typography>
            </AccordionSummary>
            <AccordionDetails >
              {item.inventory >= 1 ?
                <Typography id='inStock' >
                  <p >In Stock:</p>  <p id='stockText'>{item.inventory}</p>
                </Typography> : <Typography id='inStock' >
                  <p id='outOfStock'>Sold Out</p>
                </Typography>}
            </AccordionDetails>
          </Accordion>
        </Box >
      </div>
    ))
  }


  return (
    <Box sx={{}}>
      {results}
    </Box>
  )


}

export default Details;