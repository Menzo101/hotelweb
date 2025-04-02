import React from 'react'
import {  NavLink } from 'react-router-dom'
import './navbar.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const Navbar = () => {
  return (
    <>
     <header>
        <div className='website-container'>
        <div className='website-heading'>
            <div className='website-banner'>
            <h1>Royal</h1>
            <p>Hotels&Resorts.</p>
            </div>

            <div className='web-button'> 
            <button className='web-button'>Book your stay</button>
            </div>

        </div>

        </div>
      
        

         <nav className='nav-container-section'>
         <ul className='nav-container-container'>
          <div className='link-head'>
            <div className='website-links'> 
            <NavLink to ='/hotels' className="link-head-icons">THE HOTEL</NavLink>
            
            <MdOutlineKeyboardArrowDown className='link-head-icons'/>
            </div>
     
          </div>
          <div className='website-links'>
            <NavLink to ='/rooms' className="link">ROOMS</NavLink>
       
       <MdOutlineKeyboardArrowDown />
          </div>
          <div className='website-links'>
            <NavLink to ="/amenities" className="link">AMENITIES</NavLink>
       
          </div>
          <div className='website-links'>
          <NavLink to ='/gallery' className="link">GALLERY</NavLink>
       
  
          </div>
          <div className='website-links'>
            <NavLink to= '/blogs' className="link">BLOGS</NavLink>
          
       
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className='website-links'>
            <NavLink to ="/contact" className="link">CONTACT</NavLink>
       
          </div>

         </ul>
         

         </nav>
      </header>
    </>
   
  )
}
