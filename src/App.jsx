import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CartDrawer from './components/CartDrawer/CartDrawer';

import CartContext from './context/CartContext';
import DrawerContext from './context/DrawerContext';

import useCart from './hooks/useCart';

const App = () => {
  const cartOperations = useCart();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <CartContext.Provider value={cartOperations}>
      <Navbar
        cartCount={cartOperations.cartCount}
        openDrawer={() => setIsDrawerOpen(true)}
      />
      {isDrawerOpen && (
        <CartDrawer
          cart={cartOperations.cart}
          addToCart={cartOperations.addToCart}
          removeFromCart={cartOperations.removeFromCart}
          closeDrawer={() => setIsDrawerOpen(false)}
        />
      )}

      <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
        <Outlet />
      </DrawerContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
