import React from 'react'
import { dummyPublishedCreationData } from '../assets/assets';
import './Community.css'
import { useState,useEffect } from 'react';
import { Heart } from 'lucide-react';
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

function Community({user}) {

  const [creations,setCreations]=useState([]);
  const [loading,setLoading]=useState(true)
  const { getToken } = useAuth();


  const fetchCreations=async()=>{

    try{

       
      const token = await getToken();
      const {data}=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/get-published-creations`,
        {
          // withCredentials: true, 
          headers: {
                                      Authorization: `Bearer ${token}`
          }
        }
      )  
      if(data.success)
      {
        setCreations(data.creations)
      } else{
        toast.error(data.message)
      }

    }catch(error){
           toast.error(error.message)
    } 
    setLoading(false)
    // setCreations(dummyPublishedCreationData)
  } 

   const imageLikeToggle=async (id)=>{
    try{

        const token = await getToken();
        const {data}=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/toggle-like-creation`,
          {id},
          {
            // withCredentials: true, 
            headers: {
                      Authorization: `Bearer ${token}`
            }
          }
      )  

       if(data.success && data.message === 'Creation Liked')
      {
        toast.success(data.message)
        await fetchCreations()
      }
       else if(data.success && data.message === 'Creation Unliked')
      {
        toast.error(data.message)
        await fetchCreations()
      }
       else{
        toast.error(data.message)
      }

    }catch(error)
    {
       toast.error(error.message)
    }
   }

  
  useEffect(()=>{
    if(user)
      {
        fetchCreations();
      }
  },[user])

  return !loading ? (
      <div className="creations">
            <h2 className="creations_title">Creations</h2>

            <div className="creations_content">
                {creations.map((creation, index) => (
                  
                    <div key={index} className="creation-card">
                        <img src={creation.content} alt="" className="creation-image"/>

                        <div className="creation-overlay">
                              <p className="creation-prompt"> {creation.prompt}</p>

                              <div className="creation-likes">
                                <p>{creation.likes.length}</p>

                          <Heart 
                              onClick={() => imageLikeToggle(creation.id)}
                              className="heart-icon"
                              fill={creation.likes.includes(user.id) ? "#ef4444" : "none"}
                              stroke={creation.likes.includes(user.id) ? "#ef4444" : "#ffffff"}
                            />  


                              </div>
                        </div>
                    </div>
                  ))}

            </div>
      </div>

  ) : (
   <div className="loader-container">
  <span className="spinner"></span>
</div>

  )
}

export default Community
