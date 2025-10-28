import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
function Hero() {
    const navigate=useNavigate();
  return (
    <div className='my-div'>
      <div className='intro'>
            <h1 className='my-heading'>Create Smarter Content <br/> with <span className='ai'>AI tool</span></h1>
            <p className='my-paragraph'>Boost your content creation using our advanced AI tools. Craft engaging articles, generate stunning visuals, and streamline your workflow.</p> 
            <div className="button-container">
                    <button className="button-primary"onClick={() => navigate('/ai')} >
                        Start creating now
                    </button>
                    <button className="button-secondary">
                        Watch demo
                    </button>
            </div> 
            <div className="trusted-container">
                    <img src="/new.png" alt="User Group" />Trusted by 2k+ people
            </div>

        </div>
    </div>
  )
}

export default Hero
