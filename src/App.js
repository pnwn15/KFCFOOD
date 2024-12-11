import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Web/Home'; // หน้าแรก
import Shop from './Web/Shop'; // หน้าร้านค้า
import Wishlist from './Web/Wishlist';
import { CartProvider } from './Web/CartContext';
import Cart from './Components/Cart';
import Checkout from './Web/Checkout';
import About from './Web/About';

function App() {
  return (
    <CartProvider>
    <Router>
      <>
        <Navbar /> {/* แสดง Navbar ในทุกหน้า */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* เส้นทางของหน้าแรก */}
          <Route path="/shop" element={<Shop />} /> {/* เส้นทางของหน้า Shop */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer /> {/* แสดง Footer ในทุกหน้า */}
      </>
    </Router>
    </CartProvider>
  );
}

export default App;
