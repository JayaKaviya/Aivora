import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import axios from "axios";
import {Toaster} from 'react-hot-toast'
import './App.css'

import Home from './pages/Home';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Auth from './pages/Auth';
import Profile from './pages/Profile';
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
        const url =`${import.meta.env.VITE_BASE_URL}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
     
        if (data.user && data.user._json) {
          setUser(data.user._json);
          // localStorage.setItem("token", data.token);
        }

		} catch (err) {
        const status = err.response?.status;

        if (status === 401 || status === 403) {
          // normal unauthenticated state
          return;
        }

        console.error("Unexpected error fetching user:", err);
  }
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    <div className="container">
          {/* <div className="hello-text">hello</div>  */}
          <Toaster />
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={user ? <Home user={user} /> : <Navigate to="/auth" />}/>
                  {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
                  <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />}  /> */}

                   <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />}  />

                  <Route path="/profile"  element={user ? <Profile user={user} /> : <Navigate to="/auth"/>}  />
                  <Route path='/ai' element={ user ? <Layout user={user}/> : <Navigate to="/auth"/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path='blog-titles' element={<BlogTitle/>}/>
                        <Route path='community' element={ user ? <Community user={user}/> : <Navigate to="/auth"/>}/>
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
