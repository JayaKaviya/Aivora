import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import axios from "axios";
import './App.css'

import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
        const url =`${import.meta.env.VITE_API_URL}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        if (data.user && data.user._json) {
              setUser(data.user._json); 
        }
		} catch (err) {
        if (err.response && err.response.status === 403) {
          // ✅ 403 just means "not logged in" — ignore it silently
          console.log("User not logged in yet");
        } else {
          console.error("Unexpected error fetching user:", err);
        }
      }
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    <div className="container">
          {/* <div className="hello-text">hello</div>  */}
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={user ? <Home user={user} /> : <Navigate to="/login" />}/>
                  <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
                  <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />}  />
               
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
