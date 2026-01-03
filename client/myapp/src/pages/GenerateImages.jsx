import React from 'react'
import './WriteArticle.css'
import { Sparkles, Image } from 'lucide-react';
import { useState } from 'react';
import axios from "axios";

function GenerateImages() {

   const imageStyle=[ 'Realistic','Ghibli Style', 'Anime Style',
    'Cartoon Style','Fantasy style', 'Realistic style','3D style',
    'Portrait style'] 

  const [selectedStyle,setSelectedStyle]= useState('Realistic');
  const [input,setInput]= useState('');
  const [publish,setPublish]= useState(false);

  // const onSubmitHandler=async(e)=>{
  //         e.preventDefault();
  //   }



  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/generate-image`,
        {
          prompt: `${input}, ${selectedStyle}`,
          publish: true, 
        },
        {
          withCredentials: true, // important for auth/session
        }
      );

      if (response.data.success) {
        // setResult(response.data.image); // or secure_url
        console.log("Generated image URL:", response.data.content);
      }

    } catch (error) {
      console.error("Image generation failed:", error.response?.data || error.message);
    } 
  };


  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className="image-icon" />
                  <h1 className="card-title">AI Image Generator</h1>
                </div>
                <p className="form-label">Describe Your Image</p>

                <textarea className="form-input" onChange={(e)=>setInput(e.target.value)} 
                value={input} rows={4}
                placeholder="Describe what you want to see in the image..." required /> 

                <p className="form-label label-spacing">Style</p>
                <div className='length-container'>
                  {
                    imageStyle.map((item) => (
                      <span onClick={() => setSelectedStyle(item)} key={item}
                       className={`length-chip ${selectedStyle === item ? 'length-image-active' : ''}`}>{item}</span>
                    ))
                  }
                </div>
               <div className="publish-toggle">
                  <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={publish}
                        onChange={(e) => setPublish(e.target.checked)}
                        className="toggle-input"
                      />
                      <div className="toggle-track"></div>
                      <span className="toggle-thumb"></span>
                  </label>
                  <p className="toggle-text">Make this image Public</p>
              </div>

               <button className="generate-button-image">
                  <Image className="generate-icon" />
                  Generate image
                </button>

          </form>
          <div className="right-column-blob">
              <div className="generated-header">
                <Image className="header-icon-image" />
                <h1 className="generated-title">Generated image</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <Image className="empty-icon" />
                  <p>Enter a topic and click "Generate image" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default GenerateImages
