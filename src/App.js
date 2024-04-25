import Login from './pages/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import NavBar from './components/NavBar';
import Info from './pages/Info';
import Alerts from './pages/Alerts';
import Fine from './pages/Fine';
import Termination from './pages/Termination';
import TheUniques from './components/Letters/TheUnqiues';


function App() {
  const Layout = () =>{
    return(
      <div className="App">
      <NavBar />
      <Outlet></Outlet>
      
    </div>
    )
  }
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/adminlogin',
        element: <AdminLogin/>
      },
      {
        path: '/adminPanel',
        element: <AdminPanel/>
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/home',
        element: <Layout/>,
        children: [
          {
            path:'/home',
            element:<Home />
          },
          {
            path:'/home/info',
            element:<Info/>
          },
          {
            path:'/home/alerts',
            element: <Alerts/>
          },
          {
            path: '/home/fine&dues',
            element: <Fine/>
          },
          {
            path: '/home/termination&promotions',
            element: <Termination/>
          },
          {
            path: 'home/edit-template-tu',
            element: <TheUniques/>
          
          }
        ],
      }
    ]
  );

  return (
    <RouterProvider router ={router}>

    </RouterProvider>
  );
}

export default App;
