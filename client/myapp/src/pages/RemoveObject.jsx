import React from 'react'
import './WriteArticle.css'
import { Sparkles, Eraser, Scissors } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

function RemoveObject() {

  const [input,setInput]= useState('');
  const [object, setObject] = useState('');
  const [loading,setLoading]=useState(false)
  const [content,setContent]=useState('')
  const { getToken } = useAuth();
  
  // const onSubmitHandler=async(e)=>{
  //         e.preventDefault();
  //   }
   
 const onSubmitHandler=async(e)=>{
        e.preventDefault(); 

        try{
              setLoading(true)
              const token = await getToken();
              
              if(object.split(' ').length > 1)
              {
                return toast('Please enter only one object name')
              }

              const formData=new FormData()
              formData.append('image',input)
              formData.append('object',object)
              
              const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ai/remove-image-object`,
                            formData,           
                                {
                                  // withCredentials: true, 
                                  headers: {
                                      Authorization: `Bearer ${token}`
                                 }
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

               
               <button disabled={loading} className="generate-button-object">
                   {
                    loading ?  <span className="spinner"></span>
                    : <Scissors className="generate-icon" />
                    }
                  Remove Object
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Scissors className="header-icon-object" />
                <h1 className="generated-title">Processed image</h1>
              </div>
              
              {   
                !content ?( 
                    <div className="generated-body">
                      <div className="generated-empty">
                        <Scissors className="empty-icon" />
                        <p>Upload an image and click "Remove Object" to get started</p>
                      </div>
                    </div> 
                ):( 

                  <div className="image-container">
                      <img src={content} alt=""/>
                  </div>

                )
              }
          </div>

    </div>
  )
}

export default RemoveObject
