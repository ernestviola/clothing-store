import { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import style from './shop.module.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className={style.container}>
      <h1>Shop</h1>
      <div className={style.products}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <ItemCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
