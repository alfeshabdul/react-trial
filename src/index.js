import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'


import Home from './views/home/home';
import About from './views/about/about';
import Contact from './views/contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {path: '/',
   element:<Home/>
  },
  {path:'/contact',
   element:<Contact/>
  },
  {path:'/about',
  element:<About/>
 },

]);

root.render(
  <>
   <RouterProvider router = {router} />
  </>
  
)
