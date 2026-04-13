import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './navbar.module.css';
import Logo from '../Logo/Logo';
import CartButton from '../CartButton/CartButton';

const Navbar = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`${style.nav} ${isScrolled ? style.scrolled : ''}`}>
      <ul className={style.ul}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.cartBtn}>
        <CartButton cartCount={cartCount} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
