export const addToCart = (cart, product) => {
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    return cart.map(item =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalAmount: item.price * (item.quantity + 1),
          }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1, totalAmount: product.price }];
};

export const removeFromCart = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};

export const calculateTotalAmount = (cart) => {
  return cart.reduce((total, item) => total + Number(item.totalAmount), 0);
};
  