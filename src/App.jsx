import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CartDrawer from './components/CartDrawer/CartDrawer';

import CartContext from './context/CartContext';
import DrawerContext from './context/DrawerContext';

import useCart from './hooks/useCart';
import MenuDrawer from './components/Navbar/MenuDrawer/MenuDrawer';

const App = () => {
  const cartOperations = useCart();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CartContext.Provider value={cartOperations}>
      <Navbar
        cartCount={cartOperations.cartCount}
        openDrawer={() => setIsDrawerOpen(true)}
        openMenu={() => setIsMenuOpen(true)}
      />
      {isDrawerOpen && (
        <CartDrawer
          cart={cartOperations.cart}
          cartCount={cartOperations.cartCount}
          totalPrice={cartOperations.totalCost}
          addToCart={cartOperations.addToCart}
          removeFromCart={cartOperations.removeFromCart}
          closeDrawer={() => setIsDrawerOpen(false)}
        />
      )}
      {isMenuOpen && <MenuDrawer closeMenu={() => setIsMenuOpen(false)} />}

      <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
        <Outlet />
      </DrawerContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
