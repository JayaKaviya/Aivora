import React from 'react'
import './WriteArticle.css'
import { Sparkles,Edit } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import Markdown from 'react-markdown';
import { useAuth } from "@clerk/clerk-react";
// axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;

async function WriteArticle() {
  
  const articleLength=[
    {length:800,text:'Short (500-800 words)'},
    {length:1200,text:'Medium (800-1200 words)'},
    {length:1600,text: 'Long (1200+ words)'}
  ]
  const [selectedLength,setSelectedLength]= useState(articleLength[0]);
  const [input,setInput]= useState('');
  const [loading,setLoading]=useState(false)
  const [content,setContent]=useState('')
  const { getToken } = useAuth();
  const token = await getToken();
  
  // const {getToken}= useAuth()

 const onSubmitHandler=async(e)=>{
        e.preventDefault(); 

        try{
              setLoading(true)

              const prompt=`Write an article about ${input} in ${selectedLength.text}`

              const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ai/generate-article`,
                            {prompt, length:selectedLength.length},
                            
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


      // const onSubmitHandler = async (e) => {
      //   e.preventDefault();

      //   if (!input.trim()) return;

      //   try {
      //         const res = await axios.post(
      //           "http://localhost:8000/api/ai/generate-article",
      //           {
      //             prompt: input,
      //             length: selectedLength.length,
      //           },
      //           {
      //             withCredentials: true, // IMPORTANT if using cookies/session
      //           }
      //         );

      //       console.log(res.data);
      //   } catch (error) {
      //     console.error(
      //       error.response?.data?.message || error.message
      //     );
      //   }
      // };
                  // console.log("CONTENT TYPE:", typeof content, content);

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className=" blob icon" />
                  <h1 className="card-title">Article Configuration</h1>
                </div>
                <p className="form-label">Article Topic</p>
                <input type="text" className="form-input" onChange={(e)=>setInput(e.target.value)}
                 value={input} placeholder="The future of artificial intelligence is..." required />        
                <p className="form-label label-spacing">Article Length</p>
                <div className='length-container'>
                  {
                    articleLength.map((item,index) => (
                      <span onClick={() => setSelectedLength(item)} key={index}
                       className={`length-chip ${selectedLength?.text === item.text ? 'length-chip-active' : ''}`}>{item.text}</span>
                    ))
                  }
                </div>
                <br />
               <button disabled={loading} className="generate-button">
                 {
                  loading ?  <span className="spinner"></span>
                    : <Edit className="generate-icon" />
                 }  
                  Generate article
                </button>

          </form>
          <div className="right-column">
              <div className="generated-header">
                <Edit className="header-icon" />
                <h1 className="generated-title">Generate Article</h1>
              </div> 
              
               {!content ? (
                    <div className="generated-body">
                      <div className="generated-empty">
                        <Edit className="empty-icon" />
                        <p>Enter a topic and click "Generate article" to get started</p>
                      </div>
                    </div>
                  ) : 
                  
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
               )}
             
          </div>

    </div>
  )
}

export default WriteArticle
