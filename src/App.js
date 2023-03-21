import { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collections from './Pages/Collections';
import Cart from './components/Cart/Cart';
import Recommander from './components/Recommander/Recommander';
import CommerceProvider, {
  CommerceContext,
} from './components/CommerceProvider';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import FormInput from './components/CheckoutForm/FormInput';

function App() {
  return (
    <div className="relative font-sans min-h-[100vh]">
      <CommerceProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/suits" element={<Products />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/recommander" element={<Recommander />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/test" element={<FormInput />}></Route>
        </Routes>
      </CommerceProvider>
    </div>
  );
}

export default App;
