import React from 'react'
import './WriteArticle.css'
import { Sparkles } from 'lucide-react';

function WriteArticle() {
  return (
    <div className="article-container">
          <form className="left-card">
                <div className="card-header">
                  <Sparkles className="icon" />
                  <h1 className="card-title">Article Configuration</h1>
                </div>
          </form>
      <div className="right-column"></div>
    </div>
  )
}

export default WriteArticle
