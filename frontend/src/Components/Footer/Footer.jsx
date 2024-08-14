import React from 'react'
import './Footer.css'
import instagram_icon from '../assets/instagram_icon.png'
import footer_logo from '../assets/logo_bag.png'
import pinteste_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>FASHIONWIX</p>
       </div>
       <ul className="footer-links">
           <li>empresa</li>
           <li>produtos</li>
           <li>escritórios</li>
           <li>sobre  </li>
           <li> conntatos</li>
       </ul>
       <div className="footer-social-icon">
          <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
              <img src={pinteste_icon} alt="" />
          </div>
          <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="" />
          </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>copyright 2024 - todos os direitos reservados</p>
       </div>
    </div>
  )
}

export default Footer
