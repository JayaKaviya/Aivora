import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser } from 'lucide-react';
import { useState } from 'react';

function RemoveBackground() {

  const [input,setInput]= useState('');
  const onSubmitHandler=async(e)=>{
          e.preventDefault();
    }

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className="bg-icon" />
                  <h1 className="card-title">Background Removal</h1>
                </div>
                <p className="form-label">Upload image</p>

                <input className="form-input-image" onChange={(e)=>setInput(e.target.files[0])} type="file" 
                accept='image/*' required /> 

              <p className="helper-text">
                Supports JPG, PNG, and other image formats
              </p>

               <button className="generate-button-bg">
                  <Eraser className="generate-icon" />
                  Remove Background
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Eraser className="header-icon-bg" />
                <h1 className="generated-title">Processed image</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <Eraser className="empty-icon" />
                  <p>Upload an image and click "Remove Background" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default RemoveBackground
