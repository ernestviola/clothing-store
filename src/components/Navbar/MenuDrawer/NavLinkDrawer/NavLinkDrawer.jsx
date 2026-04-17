import { useState, useEffect } from 'react';
import style from './navLink.module.css';
import { Link } from 'react-router-dom';

const NavLinkDrawer = ({ to, timeout, closeMenu, children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const animateLink = setTimeout(() => {
      setIsAnimated(true);
    }, timeout);

    return () => {
      clearTimeout(animateLink);
    };
  }, [timeout]);

  return (
    <Link
      className={`${style.navLink} ${isAnimated ? style.animateLink : ''}`}
      to={to}
      onClick={closeMenu}
    >
      {children}
    </Link>
  );
};

export default NavLinkDrawer;
