import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import Logo from '../Logo/Logo';
import CartButton from '../CartButton/CartButton';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li>
          <Link to='/Cart'>Cart</Link>
        </li>
      </ul>
      <Logo />
      <CartButton />
    </nav>
  );
};

export default Navbar;
