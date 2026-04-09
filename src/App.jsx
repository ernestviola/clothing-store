import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { createContext, useState } from 'react';

const CartContext = createContext(null);

const App = () => {
  const [cart, setCart] = useState(null);

  return (
    <CartContext value={cart}>
      <Navbar />
      <Outlet />
    </CartContext>
  );
};

export default App;
