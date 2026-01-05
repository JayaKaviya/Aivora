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
import Plan from '../components/Plan';
import Footer from '../components/Footer'
function Home(userDetails) {

  const user=userDetails.user;


  return (
    <div >
      <Navbar/>
      <br/> <br/>
      <div >
          <Hero/>
          <AiTools user={user}/>
          <Testimonial />
          <Plan />
          <Footer />
      </div>
    </div>
  )
}

export default Home

