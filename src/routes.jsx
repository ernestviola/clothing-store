import App from './App';
import Shop from './pages/Shop/Shop.jsx';
import Cart from './pages/Cart.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
