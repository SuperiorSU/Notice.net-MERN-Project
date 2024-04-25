import Login from './pages/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';

import NavBar from './components/NavBar';
import Info from './pages/Info';
import Alerts from './pages/Alerts';
import Fine from './pages/Fine';
import Termination from './pages/Termination';
import TheUniques from './components/Letters/TheUnqiues';
import Academic from './components/Letters/Academic';
import Admin from './pages/admin/Admin';
import StudentNav from './components/StudentNav';


function App() {
  const Layout = () =>{
    return(
      <div >
      <NavBar />
      <Outlet></Outlet>
      
    </div>
    )
  }
  const Layout2 = () =>{
    return (
      <div>
        <StudentNav/>
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
        element: <Admin/>
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/homeTeacher',
        element: <Layout/>,
        children: [
          {
            path:'/homeTeacher',
            element:<Home />
          },
          {
            path:'/homeTeacher/info',
            element:<Info/>
          },
          {
            path:'/homeTeacher/alerts',
            element: <Alerts/>
          },
          {
            path: '/homeTeacher/fine&dues',
            element: <Fine/>
          },
          {
            path: '/homeTeacher/termination&promotions',
            element: <Termination/>
          },
          {
            path: 'homeTeacher/edit-template-tu',
            element: <TheUniques/>
          
          },
          {
            path: 'homeTeacher/edit-template-academic',
            element: <Academic/>
          
          }
        ],
      },
      {
        path: '/homeStudent',
        element: <Layout2/>,
        children: [
          {
            path:'/homeStudent',
            element:<div className='text-2xl text-center font-mdeium'>Home</div>
          },
          {
            path:'/homeStudent/profile',
            element:<div className='text-2xl text-center font-mdeium'>Student Profile</div>
          },
          {
            path:'/homeStudent/allNotices',
            element: <div className='text-2xl text-center font-mdeium'>All Notices</div>
          },
          {
            path: '/homeStudent/latestNotices',
            element: <div className='text-2xl text-center font-mdeium'>Latest Notices</div>
          },
          
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
