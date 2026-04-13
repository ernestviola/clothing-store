import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import CartContext from './context/CartContext';
import useCart from './hooks/useCart';

const App = () => {
  const cartOperations = useCart();
  return (
    <CartContext.Provider value={cartOperations}>
      <Navbar cartCount={cartOperations.cartCount} />
      <Outlet />
    </CartContext.Provider>
  );
};

export default App;
