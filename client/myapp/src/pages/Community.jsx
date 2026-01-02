import React from 'react'
import { dummyPublishedCreationData } from '../assets/assets';
import './Community.css'
import { useState,useEffect } from 'react';
import { Heart } from 'lucide-react';


function Community({user}) {

  const [creations,setCreations]=useState([]);
  const fetchCreations=async()=>{
    setCreations(dummyPublishedCreationData)
  }
  

  useEffect(()=>{
    if(user)
      {
        fetchCreations();
      }
  },[user])

  return (
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
                                  className={`heart-icon ${
                                    creation.likes.includes(user.id)
                                      ? "heart-liked"
                                      : "heart-unliked"
                                  }`}
                                />
                              </div>
                        </div>
                    </div>
                  ))}

            </div>
      </div>

  )
}

export default Community
