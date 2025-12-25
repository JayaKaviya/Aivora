import React from 'react'
import './Sidebar.css'
const Sidebar = ({ user, sidebar, setSidebar }) => {
//   const {user}=useUser();
//   const {signOut,openUserProfile}=useClerk();

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
        <div className='sidebar_header'>
            <img src={user?.picture ? user.picture : "./aivora.png"} alt="User Avatar" className='avatar'/>
            <h1 className='user_name'>{user?.name}</h1>
        </div>
    </div>
  )
}

export default Sidebar

