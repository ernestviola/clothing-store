import { useContext } from 'react';
import style from './cartButton.module.css';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

import CartContext from '../../context/CartContext';

const CartButton = () => {
  const { cart } = useContext(CartContext);
  console.log(cart.length);
  const bagCount = cart.length || 0;
  return (
    <button className={style.btn}>
      <div className={style.bagIcon}>
        <ShoppingBag />
        {bagCount > 0 && (
          <div className={style.bagCount}>{bagCount ? bagCount : 0}</div>
        )}
      </div>
    </button>
  );
};

export default CartButton;
