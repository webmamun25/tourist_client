import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <div className="full-footer mt-5">
      
      <div className="contact">
        <h4>Contact With Us </h4>
        <p className='muted'>SOCIAL MEDIA CHANNELS</p>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
      </div>
      <div className='emailing'>
        <h4>Newsletter</h4>
        <p>SIGN UP FOR SPECIAL OFFERS</p>
        <form className="row g-3">
  
  <div className="col-auto">
    <label htmlFor="Emailinput"  className="visually-hidden" >Email</label>
    <input type="email" className="form-control" id="Emailinput" placeholder="Email"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
  </div>
        </form>
        
        <p>&copy;Copyright 2021</p>
      </div>
      
      
    </div>
    
  );
};

export default Footer;