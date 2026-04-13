import { useEffect, useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  const addToCart = (item) => {
    let itemData;
    const newCart = { ...cart };

    if (!cart[item.title]) {
      itemData = {
        count: 1,
        title: item.title,
        price: item.price,
        images: item.images,
      };
    } else {
      itemData = newCart[item.title];
      itemData.count = itemData.count + 1;
    }

    newCart[item.title] = itemData;
    console.log(newCart);
    setCart(newCart);
  };

  const removeFromCart = (itemName) => {
    const newCart = { ...cart };
    if (!newCart[itemName]) return;
    else if (newCart[itemName].count > 1) {
      newCart[itemName].count = newCart[itemName].count - 1;
    } else {
      delete newCart[itemName];
    }
    setCart(newCart);
  };

  const cartCount = Object.entries(cart).reduce((previousValue, [, v]) => {
    return previousValue + v.count;
  }, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return { cart, cartCount, setCart, addToCart, removeFromCart };
};

export default useCart;
