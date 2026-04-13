import { useEffect, useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });

  const addToCart = (item) => {
    let itemData;
    const newCart = { ...cart };

    if (!newCart[item.title]) {
      itemData = {
        count: 1,
        title: item.title,
        description: item.description,
        price: item.price,
        images: item.images,
      };
      newCart[item.title] = itemData;
    } else {
      newCart[item.title].count = newCart[item.title].count + 1;
    }

    setCart(newCart);
    console.log(newCart);
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
