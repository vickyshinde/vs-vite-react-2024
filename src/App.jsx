import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Home from './pages/home';
// import About from './pages/about';
// import Product from './pages/product';
// import Services from './pages/services';
// import Contact from './pages/contact';
import Layout from './layout';
import PageLayout from './pages/pageLayout';


function App() {

  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <PageLayout />
        },
        {
          path: '/:page',
          element: <PageLayout />
        },
        /* {
          path: '/:page',
          element: <PageLayout page="home" data={data} loading={loading} error={error} />
        },
        {
          path: '/about',
          element: <About page="about" />
        },
        {
          path: '/product',
          element: <PageLayout />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: 'contact',
          element: <Contact />
        } */
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
