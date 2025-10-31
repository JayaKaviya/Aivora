import React from 'react'
import './Testimonial.css'
import {assets} from '../assets/assets'
function Testimonial() {

    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'David Lee',
            title: 'Content Writer, TechCorp',
            content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
    ]

    return (
        <div className="testimonials-section">
            <div className="testimonials-intro">
                <h2 className="testimonials-heading">Loved by Creators</h2>
                <p className="testimonials-description">
                     Don’t just take our word for it. Here’s what our users are saying.
                </p>
           </div>

            <div className="testimonials-container">
                {dummyTestimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <div className="stars">                   
                        {Array(5).fill(0).map((_, index) => 
                        (<img key={index} src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon}  alt="star"/>))}
                    </div>
                    <p className="testimonial-content">"{testimonial.content}"</p>
                    <hr className="testimonial-divider" />
                    <div className="testimonial-author">
                        <img src={testimonial.image} className="author-image" alt={testimonial.name}/>
                        <div className="author-info">
                            <h3 className="author-name">{testimonial.name}</h3>
                            <p className="author-title">{testimonial.title}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
    </div>
    )
}


export default Testimonial
