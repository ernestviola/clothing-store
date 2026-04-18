import { useState } from 'react';

import NavLinkDrawer from './NavLinkDrawer/NavLinkDrawer';
import style from './menuDrawer.module.css';
import { Close } from '@mui/icons-material';

const MenuDrawer = ({ closeMenu }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = async () => {
    setIsClosing(true);
    setTimeout(() => {
      closeMenu();
    }, 200);
  };

  return (
    <div
      className={`${style.backDrop} ${isClosing ? style.hideBackDrop : ''}`}
      onClick={handleClose}
    >
      <div
        className={`${style.menu} ${isClosing ? style.hide : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={style.header}>Menu</h2>
        <button className={style.closeBtn} onClick={handleClose}>
          <Close />
        </button>
        <div className={style.links}>
          <NavLinkDrawer to='/' timeout={0} closeMenu={handleClose}>
            Home
          </NavLinkDrawer>
          <NavLinkDrawer to='/shop' timeout={300} closeMenu={handleClose}>
            Shop
          </NavLinkDrawer>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
