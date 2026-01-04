import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

function RemoveBackground() {

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
              formData.append('image',input)
              
              const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ai/remove-image-background`,
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
                  <Sparkles className="bg-icon" />
                  <h1 className="card-title">Background Removal</h1>
                </div>
                <p className="form-label">Upload image</p>

                <input className="form-input-image" onChange={(e)=>setInput(e.target.files[0])} type="file" 
                accept='image/*' required /> 

              <p className="helper-text">
                Supports JPG, PNG, and other image formats
              </p>

               <button disabled={loading} className="generate-button-bg">
                 {
                  loading ?  <span className="spinner"></span>
                  :  <Eraser className="generate-icon" />
                 }
                  Remove Background
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Eraser className="header-icon-bg" />
                <h1 className="generated-title">Processed image</h1>
              </div>
              
              {
                !content ?(              
                  <div className="generated-body">
                    <div className="generated-empty">
                      <Eraser className="empty-icon" />
                      <p>Upload an image and click "Remove Background" to get started</p>
                    </div>
                  </div>
                ) : ( 
                  <div className="image-container">
                      <img src={content} alt=""/>
                  </div>
                )
              }

          </div>

    </div>
  )
}

export default RemoveBackground
