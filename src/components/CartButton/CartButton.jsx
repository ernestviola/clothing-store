import { useContext } from 'react';
import style from './cartButton.module.css';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

import CartContext from '../../context/CartContext';

const CartButton = ({ cartCount }) => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <button className={style.btn}>
      <div className={style.bagIcon}>
        <ShoppingBag />
        {cartCount > 0 && (
          <div className={style.bagCount}>{cartCount ? cartCount : 0}</div>
        )}
      </div>
    </button>
  );
};

export default CartButton;
