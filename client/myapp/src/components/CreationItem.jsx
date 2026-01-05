import React from 'react'
import './CreationItem.css'
import { useState } from 'react'
import Markdown from 'react-markdown'

function CreationItem({item}) {

    const [expanded,setExpanded]=useState(false)

  return (
    <div onClick={()=> setExpanded(!expanded)}className="creation-item">    
       <div  className="creation-header">
           <div> 
                {
                   item.type === 'review-resume'
                    ? <h2>Review the resume</h2>
                    : <h2>{item.prompt}</h2>
                }

                <p className='item-meta'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>          
            </div>
            <button className='item-type-btn'>{item.type}</button>
       </div>

       {
        expanded && (
            <div>
                {item.type === 'image'? 
                    (
                        <div>
                            <img src={item.content} alt="image" className='container-md'/>
                        </div>
                    ) : 
                    (
                        <div className='content-box'>
                            <div className="reset-tw">
                                <Markdown>
                                    {typeof item.content === "string" ? item.content : String(item.content)}
                                </Markdown>                        
                            </div>
                        </div>
                    )
            }
            </div>
        )
       }
    </div>
  )
}

export default CreationItem
