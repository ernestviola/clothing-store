const CartDrawerItem = ({ itemData, addToCart, removeFromCart }) => {
  return (
    <div>
      <img src={itemData.images[0]} alt='' />
      <h2>{itemData.title}</h2>
      <p>{itemData.description}</p>
      <div>
        <button onClick={() => removeFromCart(itemData.title)}>-</button>
        {itemData.count}
        <button onClick={() => addToCart(itemData)}>+</button>
      </div>
      <span>{itemData.price}</span>
    </div>
  );
};

export default CartDrawerItem;
