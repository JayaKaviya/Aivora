import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard'
import BlogTitle from './pages/BlogTitle';
import Community from './pages/Community';
import GenerateImages from './pages/GenerateImages';
import RemoveBackground from './pages/RemoveBackground';
import RemoveObject from './pages/RemoveObject';
import ReviewResume from './pages/ReviewResume';
import WriteArticle from './pages/WriteArticle';

function App() {
  return (
    <div>
          {/* <div className="hello-text">hello</div>  */}
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/ai' element={<Layout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path='blog-titles' element={<BlogTitle/>}/>
                        <Route path='community' element={<Community/>}/>
                        <Route path='generate-images' element={<GenerateImages/>}/>
                        <Route path='remove-background' element={<RemoveBackground/>}/>
                        <Route path='remove-object' element={<RemoveObject/>}/>
                        <Route path='review-resume' element={<ReviewResume/>}/>
                        <Route path='write-article' element={<WriteArticle/>}/> 
                  </Route>
              </Routes>
          </BrowserRouter>
    </div> 
    
  )
}
export default App;
