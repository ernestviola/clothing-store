/**
 * When drawer is closed it's not visible
 * when user clicks X the drawer should close
 * when user clicks backdrop then the drawer should close
 * each item should display with + and -
 */

import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';
import style from './cartDrawer.module.css';
import { useEffect, useState } from 'react';

const CartDrawer = ({ cart, closeDrawer, addToCart, removeFromCart }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      closeDrawer();
    }, 300);
  };
  return (
    <div
      className={`${style.backDrop} ${isClosing ? style.hideBackDrop : ''}`}
      onClick={handleClose}
    >
      <div
        className={`${style.drawer} ${isClosing ? style.hide : ''}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button onClick={handleClose}>X</button>
        <h1>Bag</h1>
        {Object.entries(cart).map(([, v]) => {
          return (
            <CartDrawerItem
              key={v.title}
              itemData={v}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartDrawer;
