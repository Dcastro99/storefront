import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import '../../assets/style/header.css'

export default function Header() {
  //-------PULLING FROM SLICE--------------//
  const cartCount = useSelector(state => state.cart.count)

  //--------CLEARING OUT LOCALHOST FOR DETAILS PAGE -------------//
  const clearLocal = (e) => {
    localStorage.removeItem('persist:detail');
  }

  return (
    <Box className='headerBox' maxWidth='l' sx={{ p: 2, borderRadius: '7px ', border: 'none' }}>
      <Link fontSize={'40px'} href="/" underline="hover" sx={{ color: 'grey' }} onClick={clearLocal}>
        THE SHOP
      </Link>
      <Link href="/checkout" underline="hover" sx={{ color: 'grey', display: 'flex', alignItems: 'center' }}>
        <ShoppingCartRoundedIcon fontSize='large' /><div id='count'>({cartCount})</div>
      </Link>
    </Box>
  )

}
