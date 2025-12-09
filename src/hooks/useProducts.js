import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await axios.get("products");
      setProducts(result.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error };
};
