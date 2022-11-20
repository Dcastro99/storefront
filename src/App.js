import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront'
import Checkout from './components/cart/checkout'
import Details from './components/products/details'
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'
import { getStoreItems } from '../src/store/productSlice'
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import '../src/assets/style/simpleCart.css'
import Chance from 'chance';
const chance = new Chance();

//----------ISLOADING FUN----------//
let fun = chance.pickone
  (['You Better Buy SOMETHING!!!!!!!',
    'I know your Bank Account Number',
    'So that\'s your email address?',
    'Your purchase feeds my children, so...',
    'You need more stuff',
    ' :) ',
    '  (O_O)  ',

  ])

// ;;;---- (O_O) ----;;; //

function App() {
  const { isLoading } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoreItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '400px' }} spacing={4} >
          <Box sx={{ fontSize: '80px' }}>{fun}</Box>
        </Box>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Storefront />} />
          <Route exact path='/details/:id' element={<Details />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
