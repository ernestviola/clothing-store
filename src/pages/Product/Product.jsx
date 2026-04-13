import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/CartContext';

import style from './product.module.css';

import Loading from '../../components/Loading/Loading';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error('Server Error');
        }
        const data = await response.json();

        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Trouble fetching data</div>;

  return (
    <div className={style.container}>
      <div className={style.product}>
        <h1>{data.title}</h1>
        <img src={data.images[0]} alt='Product Image' />
        <p>{data.description}</p>
        <button onClick={() => addToCart(data)}>Add to bag</button>
      </div>
    </div>
  );
};

export default Product;
