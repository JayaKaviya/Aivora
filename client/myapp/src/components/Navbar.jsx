import React from 'react'
import assets from '../assets'
import './Navbar.css'
import {ArrowRight} from 'lucide-react'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
  return (
    <div className='navbar'>
        <img src={assets.aivora} alt="logo" className='navbar-logo' onClick={()=>navigate('/')}/>
        <button className='getbtn'>Get Started<ArrowRight className='icon-small' /></button>
    </div>
  )
}

export default Navbar
