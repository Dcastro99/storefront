import React from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../store/cartSlice';
import { useSelector } from 'react-redux'
import { Box, Button, Card, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../assets/style/detail.css'

// const saved = JSON.parse(localStorage.getItem('detailedPageItem'))
// console.log('SAVED STUFF', saved)

function Details() {
  const dispatch = useDispatch();

  function handleAddToCart(data) {
    // console.log('ADD_TO_CART', data)
    dispatch(cartSlice.actions.addToCart(data))
  }



  const singleDetailItem = useSelector(state => state.detail.detailItems);
  // const singleDetailItem = JSON.parse(localStorage.getItem("detailedPageItem"))
  let results = [];
  console.log('displayResults', singleDetailItem)
  if (singleDetailItem.length > 0) {
    results = singleDetailItem.map(item => (
      <div id='MainDiv'>
        <Box sx={{ fontSize: '60px' }}> {item.name}</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px', width: '600px' }}>
          <Card key={item.id} sx={{ padding: '30px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={5}>
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
              <Typography id='inStock' >
                <p >In Stock:</p>  <p id='stockText'>{item.inventory}</p>
              </Typography>
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