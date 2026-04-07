import style from './cartButton.module.css';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

const CartButton = ({ items = [] }) => {
  const bagCount = items.length || 0;
  return (
    <button className={style.btn}>
      <ShoppingBag />
      {bagCount > 0 && (
        <div className={style.bagCount}>{bagCount ? bagCount : 0}</div>
      )}
    </button>
  );
};

export default CartButton;
