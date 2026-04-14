/**
 * When drawer is closed it's not visible
 * when user clicks X the drawer should close
 * when user clicks backdrop then the drawer should close
 * each item should display with + and -
 */

import { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';
import style from './cartDrawer.module.css';

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
        <button className={style.closeBtn} onClick={handleClose}>
          <Close />
        </button>
        <h1>Bag</h1>
        <div className={style.products}>
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
        <button className={style.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default CartDrawer;
