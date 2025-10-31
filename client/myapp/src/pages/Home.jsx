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
import Hero from '../components/Hero';
import AiTools from '../components/AiTools';
import Testimonial from '../components/Testimonial';

function Home(userDetails) {

  const user=userDetails.user;


  return (
    <div >
      <Navbar/> 
      <Hero/>
      <AiTools user={user}/>
      <Testimonial />
    </div>
  )
}

export default Home

