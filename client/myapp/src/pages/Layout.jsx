import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {X,Menu} from 'lucide-react'
import './Layout.css'

const Layout= ()=>{
  const navigate=useNavigate();
  const [sidebar,setSidebar]=useState(false)

  return (
    <div className="page-container">
      
      <nav className="navbar">
        <img src="/aivora.png" alt="Logo" onClick={()=>navigate('/')} className="nav-logo"/>
        {
           sidebar ? <X className='nav-icon sm:hidden'/>
           : <Menu className='nav-icon sm:hidden'/>
        }
      </nav>

      <Outlet/>
    </div>
  )
}

export default Layout
