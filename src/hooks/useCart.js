import { useState, useEffect } from 'react';
import { addToCart, removeFromCart, calculateTotalAmount } from '../services/addToCart';
import { toast } from 'react-toastify';

const TOAST_OPTIONS = {
  autoClose: 400,
  pauseOnHover: true,
};

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addProductToCart = (product) => {
    setCart(prevCart => addToCart(prevCart, product));
    toast(`Added ${product.name} to cart`, TOAST_OPTIONS);
  };

  const removeProduct = (product) => {
    setCart(prevCart => removeFromCart(prevCart, product.id));
  };

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(cart));
  }, [cart]);

  return { cart, totalAmount, addProductToCart, removeProduct };
};
