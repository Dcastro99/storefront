import React from 'react'
import Box from '@mui/material/Box';
import '../../style/footer.css'

export default function Footer() {
  return (
    <Box className='footerBox' maxWidth='l' sx={{ p: 2, borderRadius: '7px ' }}>
      &copy; 2022 Danny Castro
    </Box>
  )
}
