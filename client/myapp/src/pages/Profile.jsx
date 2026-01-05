import React from 'react'

function Profile({user}) {
    const logout=()=>{
    window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/logout`,
      '_self'
    );
  }
    // console.log("User details:", user);
  return (
    <div>
      <div className="container">

         <h1 className="heading">PROFILE</h1>
         <div className="form_container">
              <div className="left">
                   <img  className="img" src='./profile.png' alt='profile'/>
              </div>
              <div className="right">
                    <h2 className="form_heading">Profile</h2> 

                    <img
                        className="profile_img"
                        src={user?.picture ? user.picture : "./aivora.png"}
                        alt="profile"
                        />
                    <input type="text" defaultValue={user.name} className="input" placeholder="Username"/>
                    <input type="text"  defaultValue={user.email} className="input" placeholder="Email"/>

                    <button className="btn" onClick={logout}>Logout</button>                
              </div>
      
        </div>    
    </div>
    </div>
  )
}

export default Profile
