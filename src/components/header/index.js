import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import '../../style/header.css'

export default function Header() {
  return (

    <Box className='headerBox' maxWidth='l' sx={{ p: 2, borderRadius: '7px ', border: 'none' }}>
      <Link fontSize={'40px'} href="/" underline="hover" sx={{ color: 'grey' }}>
        THE SHOP
      </Link>
      <Link href="/checkout" underline="hover" sx={{ color: 'grey' }}>
        <ShoppingCartRoundedIcon fontSize='large' />
      </Link>
    </Box>
  )
}
