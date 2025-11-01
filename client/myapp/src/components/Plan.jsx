import React from 'react'
import './Plan.css'
import {PricingTable} from '@clerk/clerk-react'
function Plan() {
  return (
    <div className="pricing-section">
        <div className="pricing-header">
            <h2 className="pricing-title">Choose Your Plan</h2>
            <p className="pricing-subtitle">
               Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
            </p>
        </div> 
        <div className='pricing-card'>
            <PricingTable/>
        </div>
    </div>
  )
}

export default Plan
