import style from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.home}>
      <h1>Home</h1>
      <Link to='/shop'>
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
