import style from './itemCard.module.css';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className={style.link}>
      <div className={style.card}>
        <div className={style.imgContainer}>
          <img src={item.images[0]} alt='' />
        </div>
        <div className={style.purchaseRow}>
          <span className={style.price}>${item.price.toFixed(2)}</span>
        </div>
        <h3 className={style.title}>{item.title}</h3>
      </div>
    </Link>
  );
};

export default ItemCard;
