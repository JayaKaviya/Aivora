import React from 'react'
import './AiTools.css'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function AiTools({user}) {
    const navigate=useNavigate();

  return (
    <div>
       <div className="section-container">
            <div className="section-intro">
                <h2 className="section-heading">Powerful AI Tools</h2>
                <p className="section-description">
                Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
                </p>
            </div>
            <div className='tools-container'>
               {AiToolsData.map((tool,index)=>(
                    <div key={index} className='tool-card' onClick={()=>user && navigate(tool.path)}> 
                        <tool.Icon className='tool-icon' style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}} />
                        <h3 className='tool-title'>{tool.title}</h3>
                        <p className='tool-description'>{tool.description}</p>
                    </div>
               ))}
            </div>
        </div>

    </div>
  )
}

export default AiTools
