import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront'
import Checkout from './components/cart/checkout'
import Details from './components/products/details'
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Storefront />} />
          <Route path='/details' element={<Details />} />
          <Route path='/checkout' element={<Checkout />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
