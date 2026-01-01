import React from 'react'
import './WriteArticle.css'
import { Sparkles,Edit } from 'lucide-react';
import { useState } from 'react';
function WriteArticle() {
  
  const articleLength=[
    {length:800,text:'Short (500-800 words)'},
    {length:1200,text:'Medium (800-1200 words)'},
    {length:1600,text: 'Long (1200+ words)'}

  ] 

  const [selectedLength,setSelectedLength]= useState(articleLength[0]);
  const [input,setInput]= useState('');
  const onSubmitHandler=async()=>{
        e.preventDefault();
  }

  return (
    <div className="article-container">
          <form className="left-card" onSubmit={onSubmitHandler}>
                <div className="card-header">
                  <Sparkles className=" blob icon" />
                  <h1 className="card-title">Article Configuration</h1>
                </div>
                <p className="form-label">Article Topic</p>
                <input type="text" className="form-input" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="The future of artificial intelligence is..." required />        
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
               <button className="generate-button">
                  <Edit className="generate-icon" />
                  Generate article
                </button>

          </form>
          <div className="right-column">
              <div className="generated-header">
                <Edit className="header-icon" />
                <h1 className="generated-title">Generated Article</h1>
              </div>

              <div className="generated-body">
                <div className="generated-empty">
                  <Edit className="empty-icon" />
                  <p>Enter a topic and click "Generate article" to get started</p>
                </div>
              </div>
          </div>

    </div>
  )
}

export default WriteArticle
