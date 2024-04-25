import React from 'react'
import NavBag from './NavBag'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Admin = () => {

  return (
    <div>
        <NavBag className=''/>
        <div className='grid grid-cols-12 sticky '>
            <div className=' col-span-2'>
              <aside className='sticky top-[70px] x-[3]'>
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

export default Admin