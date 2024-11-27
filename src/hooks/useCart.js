import { useState, useEffect } from 'react';
import { addToCart, removeFromCart, calculateTotalAmount } from '../services/addToCart';
import { toast } from 'react-toastify';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const toastOptions = {
    autoClose: 400,
    pauseOnHover: true,
  };

  const addProductToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
    toast(`Added ${product.name} to cart`, toastOptions);
  };

  const removeProduct = (product) => {
    const newCart = removeFromCart(cart, product.id);
    setCart(newCart);
  };

  useEffect(() => {
    const newTotalAmount = calculateTotalAmount(cart);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return { cart, totalAmount, addProductToCart, removeProduct };
};
