import React, { createContext, useEffect, useState } from 'react';
import { commerce } from '../libs/commerce';

export const CommerceContext = createContext();

const CommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  //

  //

  const fetchCart = async () => {
    try {
      const response = await commerce.cart.retrieve();
      if (response) {
        setCart(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart().refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setError(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <CommerceContext.Provider
      value={{
        products,
        categories,
        cart,
        order,
        error,
        handleCaptureCheckout,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
      }}>
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceProvider;
