import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {X,Menu} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import './Layout.css'
import Login from "./Login";

const Layout= ({user})=>{
  const navigate=useNavigate();
  const [sidebar,setSidebar]=useState(false)

  return user ? (
    <div className="page-container">
      
      <nav className="navbarai">
        <img src="/aivora.png" alt="Logo" onClick={()=>navigate('/')} className="nav-logo"/>
        {
           sidebar 
           ? <X onClick={()=>setSidebar(false)} className='nav-icon sm:hidden'/>
           : <Menu onClick={()=>setSidebar(true)} className='nav-icon sm:hidden'/>
        }
      </nav>

      <div className='main-container'>
         <Sidebar user={user} sidebar={sidebar} setSidebar={setSidebar}/>
         <div className='outlet'>
             <Outlet/>
         </div>
      </div>

   
    </div>
  ) :(
    <div className='centered-container'>
      <Login />
    </div>
  )
}

export default Layout
