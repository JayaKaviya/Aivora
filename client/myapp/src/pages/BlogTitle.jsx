import React from 'react'
import './WriteArticle.css'
import { Sparkles,Edit, Hash } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";
function BlogTitle() {

   const blobCategories=[
   'General', 'Technology', 'Business', 'Health','Lifestyle', 'Education',
   'Travel','Food'] 

  const [selectedCategory,setSelectedCategory]= useState('General');
  const [input,setInput]= useState('');

  // const onSubmitHandler=async(e)=>{
  //         e.preventDefault();
  //   }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/ai/generate-blog-title`,
        {
          prompt: input,
          category: selectedCategory,
        },
        {
          withCredentials: true, // important if auth/session is used
        }
      );

      console.log("Generated Titles Response:", response.data);

    } catch (error) {
      console.error(
        "Title generation failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className="blob-icon" />
                  <h1 className="card-title">AI Title Generator</h1>
                </div>
                <p className="form-label">Keyword</p>
                <input type="text" className="form-input" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="The future of artificial intelligence is..." required />        
                <p className="form-label label-spacing">Category</p>
                <div className='length-container'>
                  {
                    blobCategories.map((item) => (
                      <span onClick={() => setSelectedCategory(item)} key={item}
                       className={`length-chip ${selectedCategory === item ? 'length-blob-active' : ''}`}>{item}</span>
                    ))
                  }
                </div>
                <br />
               <button className="generate-button">
                  <Hash className="generate-icon" />
                  Generate title
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Hash className="header-icon-blob" />
                <h1 className="generated-title">Generated titles</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <Hash className="empty-icon" />
                  <p>Enter a topic and click "Generated title" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default BlogTitle
