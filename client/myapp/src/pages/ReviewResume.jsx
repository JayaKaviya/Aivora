import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser, FileText } from 'lucide-react';
import { useState } from 'react';

function ReviewResume()  {

  const [input,setInput]= useState('');
  const onSubmitHandler=async(e)=>{
          e.preventDefault();
    }

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className="resume-icon" />
                  <h1 className="card-title">Resume Review</h1>
                </div>
                <p className="form-label">Upload Resume</p>

                <input className="form-input-image" onChange={(e)=>setInput(e.target.files[0])} 
                type="file" accept='application/pdf' required /> 

              <p className="helper-text">
                Supports PDF resume only.
              </p>

               <button className="generate-button-resume">
                  <FileText className="generate-icon" />
                  Review Resume
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <FileText className="header-icon-resume" />
                <h1 className="generated-title">Analysis Results</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <FileText className="empty-icon" />
                  <p>Upload a resume and click "Review Resume" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default ReviewResume
