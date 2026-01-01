import React from 'react'
import { dummyCreationData } from '../assets/assets'
import './Dashboard.css'
import { useEffect,useState } from 'react'
import { Sparkles,Gem } from 'lucide-react';
import {Protect} from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem';

const Dashboard = () => {

      const [creations, setCreations] = useState([])

      const getDashboardData = async ()=>{
           setCreations (dummyCreationData);
      }

      useEffect (()=>{ 
        getDashboardData()
      }, [])


      return (
       <div className="scroll-container">
            <div className="cards-wrapper">
              {/* Total Creations Card */}
                <div className="card">
                    <div className="card-text">
                        <p className="card-label">Total Creations</p>
                        <h2 className="card-number">{creations.length}</h2>              
                    </div>
                    <div className="card-icon">
                        <Sparkles className="sparkles-icon" />
                    </div>
                </div>
            </div>

            <div className="cards-wrapper">
              {/* Active Plan Card */}
                <div className="card">
                    <div className="card-text">
                        <p className="card-label">Active Plan</p>
                        <h2 className="card-number">
                            <Protect plan="premium" fallback="free">
                              Premium
                            </Protect>
                        </h2>              
                    </div>
                    <div className="card-icon">
                        <Gem className="sparkles-icon" />
                    </div>
                </div>
            </div>

            <div className='recent-creations'>
                <p className='recent-title'>Recent Creations</p>
                {
                  creations.map((item)=> <CreationItem key={item.id} item={item} />)
                }
            </div>
      </div>

      )
}

export default Dashboard
