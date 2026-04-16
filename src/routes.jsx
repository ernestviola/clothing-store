import App from './App';
import Shop from './pages/Shop/Shop.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/checkout', element: <Checkout /> },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
