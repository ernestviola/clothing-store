import NavLinkDrawer from './NavLinkDrawer/NavLinkDrawer';
import style from './menuDrawer.module.css';
import { Close } from '@mui/icons-material';

const MenuDrawer = ({ closeMenu }) => {
  return (
    <div className={style.backDrop} onClick={closeMenu}>
      <div className={style.menu} onClick={(e) => e.stopPropagation()}>
        <h2 className={style.header}>Menu</h2>
        <button className={style.closeBtn} onClick={closeMenu}>
          <Close />
        </button>
        <div className={style.links}>
          <NavLinkDrawer to='/' timeout={0} closeMenu={closeMenu}>
            Home
          </NavLinkDrawer>
          <NavLinkDrawer to='/shop' timeout={300} closeMenu={closeMenu}>
            Shop
          </NavLinkDrawer>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
