// import React from 'react'
// import Navbar  from '../components/Navbar';
// function Home() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   )
// }

// export default Home

import React from 'react'
import '../index.css'; 
import Navbar  from '../components/Navbar';

function Home(userDetails) {

  const user=userDetails.user;
  const logout=()=>{
    window.open(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      '_self'
    );
  }

  return (
    <div >
      <Navbar />
    <div className="container">

         <h1 className="heading">HOME</h1>
         <div className="form_container">
              <div className="left">
                   <img  className="img" src='./profile.jpg' alt='profile'/>
              </div>
              <div className="right">
                    <h2 className="form_heading">Profile</h2> 
                    <img  className="profile_img" src={user.picture} alt='profile'/>
                    <input type="text" defaultValue={user.name} className="input" placeholder="Username"/>
                    <input type="text"  defaultValue={user.email} className="input" placeholder="Email"/>

                    <button className="btn" onClick={logout}>Logout</button>                
              </div>
      
        </div>    
    </div>
    </div>
  )
}

export default Home

