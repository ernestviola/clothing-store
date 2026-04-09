import style from './itemCard.module.css';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className={style.card}>
        <div className={style.imgContainer}>
          <img src={item.images[0]} alt='' />
        </div>
        <div className={style.purchaseRow}>
          <span className={style.price}>${item.price.toFixed(2)}</span>
        </div>
        <h3>{item.title}</h3>
        <details>{item.description}</details>
      </div>
    </Link>
  );
};

export default ItemCard;
