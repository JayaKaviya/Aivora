import React from 'react'
import './WriteArticle.css'
import { Sparkles, Image } from 'lucide-react';
import { useState } from 'react';

function GenerateImages() {

   const imageStyle=[ 'Realistic','Ghibli Style', 'Anime Style',
    'Cartoon Style','Fantasy style', 'Realistic style','3D style',
    'Portrait style'] 

  const [selectedStyle,setSelectedStyle]= useState('Realistic');
  const [input,setInput]= useState('');
  const [publish,setPublish]= useState(false);

  const onSubmitHandler=async(e)=>{
          e.preventDefault();
    }

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
