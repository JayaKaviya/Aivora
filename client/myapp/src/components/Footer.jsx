import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
         <img src='./aivora.png' alt='Aivora' className='logo'/>
          <p className="footer-logo-text">
            Aivora is a cutting-edge platform that helps creators generate, enhance, and optimize content effortlessly. Trusted by thousands of users worldwide.
          </p>
        </div>

        <div className="footer-links-newsletter">
          <div className="footer-links">
            <h2>Company</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h2>Subscribe to our newsletter</h2>
            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        Copyright 2025 © <a href="/">Aivora</a>. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
