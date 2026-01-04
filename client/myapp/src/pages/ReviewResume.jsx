import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser, FileText } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import Markdown from 'react-markdown';

function ReviewResume()  {

  const [input,setInput]= useState('');
  const [loading,setLoading]=useState(false)
  const [content,setContent]=useState('')

  // const onSubmitHandler=async(e)=>{
  //         e.preventDefault();
  //   }

   const onSubmitHandler=async(e)=>{
        e.preventDefault(); 

        try{
              setLoading(true)

              const formData=new FormData()
              formData.append('resume',input)
              
              const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ai/review-resume`,
                            formData,           
                                {
                                  withCredentials: true, 
                                }
                            
                          ) 
              // console.log(data)
              if(data.success)
              {
                setContent(data.content)
              } else{
                toast.error(data.message)
              }

            } catch(error){
                  toast.error(error.message)        
            }

           setLoading(false)
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

               <button disabled={loading}  className="generate-button-resume">
                   {
                    loading ?  <span className="spinner"></span>
                    : <FileText className="generate-icon" />
                   }
                  Review Resume
                </button>

          </form>
          <div className="right-column-resume">
              <div className="generated-header">
                <FileText className="header-icon-resume" />
                <h1 className="generated-title">Analysis Results</h1>
              </div>
             
              {
                !content ?(   

                  <div className="generated-body">
                    <div className="generated-empty">
                      <FileText className="empty-icon" />
                      <p>Upload a resume and click "Review Resume" to get started</p>
                    </div>
                  </div> 
                ):

                  typeof content === "string" && content.trim() !== "" ? (
                      <div className="custom-class">
                        <div className="reset-tw">
                          <Markdown>{content}</Markdown>
                        </div>
                      </div>
                    ) : (
                      <div className="generated-empty">
                        <p>No content generated yet</p>
                      </div>
                    )
              }
          </div>

    </div>
  )
}

export default ReviewResume
