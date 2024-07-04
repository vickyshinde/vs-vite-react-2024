import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Services from './pages/services';
import Contact from './pages/contact';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
