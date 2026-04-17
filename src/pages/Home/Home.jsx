import style from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.cta}>
        <h1>Best items in the world!</h1>
        <p>
          The finest in workout material. Tested for endurance and longevity in
          our labs in California.
        </p>
      </div>
      <Link className={style.link} to='/shop'>
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
