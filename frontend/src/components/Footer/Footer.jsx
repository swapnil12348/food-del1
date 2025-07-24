import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Whether you’re chasing dreams, running meetings, or taking a break — Tomato is built for the ones who don’t slow down. Craving biryani between brainstorms? A cheesy burger after a long day? Or just a salad and chai to keep things steady? With lightning-fast delivery from over 3 lakh restaurants, your fuel is never far. Order in seconds, track every bite, and keep going. Hustle harder – we’ve got the food.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>



            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-70489-30266</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

            






        </div>
        
        <hr/>
        <p className="footer-copyright">Copyright 2024 Tomato.com - All Rights Reserved</p>
        
        
        
        
        </div>
  )
}

export default Footer