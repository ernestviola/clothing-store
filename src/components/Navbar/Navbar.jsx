import { useState, useEffect } from 'react';
import { Menu } from '@mui/icons-material';
import NavLink from './NavLink/NavLink';
import PropTypes from 'prop-types';
import style from './navbar.module.css';
import Logo from '../Logo/Logo';
import CartButton from '../CartButton/CartButton';

const Navbar = ({ cartCount, openDrawer, openMenu }) => {
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
      <div className={style.desktopNav}>
        <ul className={style.ul}>
          <li>
            <NavLink to='/' timeout={0}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' timeout={500}>
              Shop
            </NavLink>
          </li>
        </ul>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.right}>
          <CartButton cartCount={cartCount} openDrawer={openDrawer} />
          <button className={style.hamburger} onClick={openMenu}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
