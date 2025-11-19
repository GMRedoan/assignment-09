import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Error from './Pages/Error';
import AuthProvider from './provider/AuthProvider';
import Loading from './Pages/Loading';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import PrivateRoutes from './routes/PrivateRoutes';
import Details from './Pages/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Toy.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: ()=> fetch('/AllToy.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes>
                      <Details></Details>
                 </PrivateRoutes>,
        loader: ()=> fetch('/AllToy.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
  {
    path: "/*",
    element: <Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
