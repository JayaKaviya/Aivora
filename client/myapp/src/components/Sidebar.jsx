import React from 'react'
import './Sidebar.css'
import {Protect} from '@clerk/clerk-react'
import { Eraser, FileText, Hash, House, Image, Scissors, SquarePen, Users } from 'lucide-react';
import { NavLink } from "react-router-dom";

const navItems = [
    {to: '/ai', label: 'Dashboard', Icon: House},
    {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
    {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
    {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
    {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser}, 
    {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors}, 
    {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText}, 
    {to: '/ai/community', label: 'Community', Icon: Users}
]

const Sidebar = ({ user, sidebar, setSidebar }) => {
//   const {user}=useUser();
//   const {signOut,openUserProfile}=useClerk();

   const logout=()=>{
      window.open(
        `${import.meta.env.VITE_BASE_URL}/auth/logout`,
        '_self'
      );
  }

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
        <div className='sidebar_header'>
            <img src={user?.picture ? user.picture : "./aivora.png"} alt="User Avatar"   referrerPolicy="no-referrer"
              onError={(e) => {
                e.target.src = "/aivora.png"; 
              }} 
             className='avatar'
              />
            <h2 className='user_name'>{user?.name}</h2>
            <div className='sidebar-section'>
              {navItems.map(({to, label, Icon})=>(

                  <NavLink key={to} to={to} end={to ==='/ai'}
                      onClick={()=>setSidebar(false)} 
                      className={({isActive})=>isActive ? "sidebar-link active" : "sidebar-link" }>
                    
                      {({isActive})=>(
                        <>
                          <Icon  className={isActive ? "icon icon-active" : "icon"}
                            />
                            {label}
                        </>
                      )}
                  </NavLink>
              ))}
            </div>
        </div>
        <div className='sidebar-footer'>
           <div className="user-profile" 
          //  onClick={openUserProfile}
           >
                  <img src={user.picture} alt="User Avatar" className="user-avatar"/>
                  <div>
                      <h1 className="user-name">{user.name}</h1>
                      <p className="protect-text">
                        <Protect plan="premium" fallback="Free">
                          Premium
                        </Protect>&nbsp;Plan
                      </p>
                  </div>
            </div>
            <span onClick={logout} className="logout-icon" style={{ cursor: 'pointer' }}>➡ </span>
 
        </div>
    </div>
  )
}

export default Sidebar

