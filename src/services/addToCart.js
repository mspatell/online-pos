export const addToCart = (cart, product) => {
    const findProductInCart = cart.find((i) => i.id === product.id);
  
    if (findProductInCart) {
      return cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalAmount: cartItem.price * (cartItem.quantity + 1),
            }
          : cartItem
      );
    }
  
    return [...cart, { ...product, quantity: 1, totalAmount: product.price }];
  };
  
  export const removeFromCart = (cart, productId) => {
    return cart.filter((cartItem) => cartItem.id !== productId);
  };
  
  export const calculateTotalAmount = (cart) => {
    return cart.reduce((total, item) => total + parseInt(item.totalAmount), 0);
  };
  