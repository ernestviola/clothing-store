import App from './App';
import Store from './pages/Store.jsx';
import Cart from './pages/Cart.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/store', element: <Store /> },
      { path: '/cart', element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
