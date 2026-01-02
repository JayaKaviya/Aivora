import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser, Scissors } from 'lucide-react';
import { useState } from 'react';

function RemoveObject() {

  const [input,setInput]= useState('');
  const [object, setObject] = useState('');
  const onSubmitHandler=async(e)=>{
          e.preventDefault();
    }

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className="object-icon" />
                  <h1 className="card-title">Object Removal</h1>
                </div>
                <p className="form-label">Upload image</p>

                <input className="form-input-image" onChange={(e)=>setInput(e.target.files[0])} type="file" 
                accept='image/*' required /> 

                 <p className="form-label label-spacing">Describe object name to remove...</p>
                
                 <textarea className="form-input" onChange={(e)=>setObject(e.target.value)} 
                value={object} rows={4}
                placeholder="e.g., watch or spoon, Only single object name" required /> 

               
               <button className="generate-button-object">
                  <Scissors className="generate-icon" />
                  Remove Object
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Scissors className="header-icon-object" />
                <h1 className="generated-title">Processed image</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <Scissors className="empty-icon" />
                  <p>Upload an image and click "Remove Object" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default RemoveObject
