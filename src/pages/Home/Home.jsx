import style from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.home}>
      <Link className={style.link} to='/shop'>
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
