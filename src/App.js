import Login from './pages/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Sidebar from './pages/admin/Sidebar';
import NavBar from './components/NavBar';
import Info from './pages/Info';
import Alerts from './pages/Alerts';
import Fine from './pages/Fine';
import Termination from './pages/Termination';
import TheUniques from './components/Letters/TheUnqiues';
import Academic from './components/Letters/Academic';
import Admin from './pages/admin/Admin';
import StudentNav from './components/StudentNav';
import NavBag from './pages/admin/NavBag';
import Dashboard from './pages/admin/Dashboard';
import Notices from './pages/admin/Notices';
import AllUsers from './pages/admin/AllUsers';
import AddUser from './pages/admin/AddUser';
import StudentHome from './pages/StudentHome';


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
  const Layout3 = () =>{
    return(
      <div>
        <NavBag/>
        <div className='grid grid-cols-12 sticky '>
            <div className=' col-span-2'>
              <aside className='sticky top-[1px] x-[3]'>
                <Sidebar/>
              </aside>
            </div>  
           <div className=' col-span-10 z-[-1]'>
              <Outlet />
           </div>
        </div>
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
        element: <Layout3/>,
        children:[
          {
            path: '/adminPanel',
            element: <Dashboard/>
          },
          {
            path: '/adminPanel/notices',
            element: <Notices/>
          },
          {
            path: '/adminPanel/allusers',
            element: <AllUsers/>
          },
          {
            path: '/adminPanel/addUsers',
            element: <AddUser/>
          },
        ]
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
            element:<StudentHome/>
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
