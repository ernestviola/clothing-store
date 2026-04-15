/**
 * When drawer is closed it's not visible
 * when user clicks X the drawer should close
 * when user clicks backdrop then the drawer should close
 * each item should display with + and -
 */

import { useEffect, useState } from 'react';
import { Close, ShoppingBagOutlined } from '@mui/icons-material';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';
import style from './cartDrawer.module.css';
import { Link } from 'react-router-dom';

const EmptyCart = ({ closeDrawer }) => {
  return (
    <div className={style.emptyCart}>
      <ShoppingBagOutlined className={style.bag} />
      <p>Your bag is empty!</p>
      <span>
        Lets go{' '}
        <Link to='/shop' className={style.link} onClick={closeDrawer}>
          shopping
        </Link>{' '}
        ;)
      </span>
    </div>
  );
};

const CartWithItems = ({ cart, totalPrice, addToCart, removeFromCart }) => {
  return (
    <div className={style.cartContainer}>
      <h1 className={style.header}>Bag</h1>
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
      <div className={style.checkoutSection}>
        <span className={style.price}>Total: ${totalPrice}</span>
        <button className={style.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

const CartDrawer = ({
  cart,
  cartCount,
  totalPrice,
  closeDrawer,
  addToCart,
  removeFromCart,
}) => {
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

        {cartCount === 0 && <EmptyCart closeDrawer={closeDrawer} />}
        {cartCount > 0 && (
          <CartWithItems
            cart={cart}
            totalPrice={totalPrice}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
