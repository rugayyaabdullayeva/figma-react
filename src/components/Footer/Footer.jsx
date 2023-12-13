import React from 'react'
import "./Footer.css"
import Icon from '../assets/icon/Group 19.svg'


const Footer = () => {
  return (     
      <div className='footer d-flex justify-content-between'>
        <h3>Shortly</h3>

        <ul className='footer-ul'>
          <h3>Features</h3>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul className='footer-ul'>
          <h3>Resources</h3>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul className='footer-ul'>
          <h3>Company</h3>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div>
          <img src={Icon} />
        </div>
      </div>
  )
}

export default Footer