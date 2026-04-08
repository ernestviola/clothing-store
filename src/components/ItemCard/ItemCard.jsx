import { useState } from 'react';
import style from './itemCard.module.css';
import { ShoppingBagOutlined as ShoppingBag } from '@mui/icons-material';

const ItemCard = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={style.card}>
      <img src={item.image} alt='' />
      <h3>{item.title}</h3>
      <div>
        <span className={style.price}>{item.price}</span>
        <button className={style.btn}>
          <ShoppingBag sx={style.icon} />
        </button>
      </div>
      <p className={showDescription ? '' : style.hidden}>{item.description}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {!showDescription ? 'Show More' : 'Hide'}
      </button>
    </div>
  );
};

export default ItemCard;
