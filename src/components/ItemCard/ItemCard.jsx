import style from './itemCard.module.css';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

const ItemCard = ({ item }) => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={item.images[0]} alt='' />
      </div>

      <div className={style.purchaseRow}>
        <span className={style.price}>${item.price.toFixed(2)}</span>
        <button className={style.btn}>
          <ShoppingBag sx={style.icon} />
        </button>
      </div>
      <h3>{item.title}</h3>
      <details>{item.description}</details>
    </div>
  );
};

export default ItemCard;
