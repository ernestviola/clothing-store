import style from './checkoutItem.module.css';

const CheckoutItem = ({ itemData, addToCart, removeFromCart }) => {
  const img = itemData.images ? itemData.images[0] : '';
  return (
    <div className={style.container}>
      <img src={img} alt={`Picture of ${itemData.title}`} />
      <div className={style.details}>
        <p className={style.title}>{itemData.title}</p>
        <div className={style.priceAndCount}>
          <span>${itemData.price}</span>
          <div className={style.itemCountController}>
            <button
              className={style.itemCountController__button}
              onClick={() => removeFromCart(itemData.title)}
            >
              -
            </button>
            <span className={style.count}>{itemData.count}</span>
            <button
              className={style.itemCountController__button}
              onClick={() => addToCart(itemData)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
