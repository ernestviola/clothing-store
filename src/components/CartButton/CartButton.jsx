import style from './cartButton.module.css';
import PropTypes from 'prop-types';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

import CartContext from '../../context/CartContext';

const CartButton = ({ cartCount, openDrawer }) => {
  return (
    <button className={style.btn} onClick={openDrawer}>
      <div className={style.bagIcon}>
        <ShoppingBag />
        {cartCount > 0 && (
          <div className={style.bagCount}>{cartCount ? cartCount : 0}</div>
        )}
      </div>
    </button>
  );
};

CartButton.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartButton;
