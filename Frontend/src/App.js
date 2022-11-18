import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront'
import Checkout from './components/cart/checkout'
import Details from './components/products/details'
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'
import { getStoreItems } from '../src/store/productSlice'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
          <CircularProgress color="secondary" />
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
          <Route path='/details/:id' element={<Details />} />
          <Route path='/checkout' element={<Checkout />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
