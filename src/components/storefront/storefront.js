import React from 'react'
import Box from '@mui/material/Box';
import Categories from './categories'
import CurrentCategory from './current-catagory'
import Products from './products'

import '../../assets/style/storefront.css'

export default function storefront() {
  return (
    <Box className='storeFrontBox' sx={{ position: 'relative' }}>
      <Categories />
      <CurrentCategory />
      <Products />
    </Box>
  )
}
