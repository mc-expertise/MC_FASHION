import React, { createContext, useEffect, useState } from 'react';
import { commerce } from '../libs/commerce';

export const CommerceContext = createContext();

const CommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(null);
  const [cart, setCart] = useState({});
  const [cartQuantity, setCartQuantity] = useState(0);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  //

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    setCartQuantity(cart.total_items);
  };
  //

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
    setCartQuantity(response.total_items);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  Promise.all([fetchProducts(), fetchCart(), fetchCategories()]);

  const [updatedCartQuantity, setUpdatedCartQuantity] = useState(cartQuantity);

  return (
    <CommerceContext.Provider
      value={{
        products,
        categories,
        cart,
        cartQuantity,
        updatedCartQuantity,
        setUpdatedCartQuantity,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
      }}>
      {children}
    </CommerceContext.Provider>
  );
};

export default CommerceProvider;
