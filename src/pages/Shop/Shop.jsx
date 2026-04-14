import { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import style from './shop.module.css';
import Loading from '../../components/Loading/Loading';

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch the data');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <div className={style.container}>
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
