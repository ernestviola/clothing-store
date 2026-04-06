import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import Logo from '../Logo/Logo';
import CartButton from '../CartButton/CartButton';
import { useState, useEffect } from 'react';

const Navbar = () => {
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
          <Link to='/Cart'>Cart</Link>
        </li>
      </ul>
      <Logo />
      <CartButton />
    </nav>
  );
};

export default Navbar;
