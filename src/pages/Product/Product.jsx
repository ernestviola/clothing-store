import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/CartContext';
import DrawerContext from '../../context/DrawerContext';

import style from './product.module.css';

import Loading from '../../components/Loading/Loading';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { setIsDrawerOpen } = useContext(DrawerContext);

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

  const handleAddToCart = (data) => {
    setIsDrawerOpen(true);
    addToCart(data);
  };

  if (loading) return <Loading />;
  if (error) return <div>Trouble fetching data</div>;

  return (
    <div className={style.container}>
      <div className={style.product}>
        <img
          className={style.product__image}
          src={data.images[0]}
          alt={`Picture of ${data.title}`}
        />

        <div className={style.productDetails}>
          <h1 className={style.productDetails__header}>{data.title}</h1>

          <p className={style.productDetails__p}>{data.description}</p>
          <button
            className={style.productDetails__button}
            onClick={() => handleAddToCart(data)}
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
