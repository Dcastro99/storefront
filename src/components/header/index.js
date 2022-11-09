import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import '../../style/header.css'

export default function Header() {
  return (

    <Box className='headerBox' maxWidth='l' sx={{ p: 2, border: '1px dashed grey', borderRadius: '7px ' }}>
      <Link href="/" underline="hover" sx={{ color: 'grey' }}>
        OUR STORE
      </Link>
      <Link href="/checkout" underline="hover" sx={{ color: 'grey' }}>
        simpleCart
      </Link>
    </Box>
  )
}
