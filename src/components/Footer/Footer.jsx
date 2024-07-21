import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
         <img src={assets.logo} alt=''/>
         <p>Thank you for visiting our website! We appreciate your interest in our services and look forward to serving you. If you have any questions or need assistance, please feel free to reach out.
         </p>
         <div className='footer-social-icons'>
           <img src={assets.facebook_icon} alt=''/>
           <img src={assets.linkedin_icon} alt=''/>
           <img src={assets.twitter_icon} alt=''/>
         </div>
        </div>
        <div className='footer-content-centre'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9685864791</li>
            <li>sisodiyaanvesh@gmail.com</li>
          </ul>
        </div>
      
    </div>
      <hr/>
      <p className='footer-copyright'> copy right @ tomato.com - All Right Reserved</p>
    </div>

  )
}

export default Footer
