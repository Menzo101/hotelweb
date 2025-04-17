import React from 'react'
import { footerlinks } from '../../data';
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import './footer.css'


export const Footer = () => {
    return (
        <>
            <section className="compatable-section">
                <div className="compatable-container">
                    <div className='content-oluwatobi'>
                        <h1>Sign Up Exclusive <br /> Offers From Us</h1>
                        <div className='content-allinput'>
                            <input placeholder='   your name' />
                            <input placeholder='   your email address' />
                            <div className='jagajaga-button'>
                                <button className="jagajaga-button">SUBSCRIBE NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="oluwatobimenzo"></div>
                    <div className='lastfooter-container'>
                        <div className='lastfooter-cont1'>
                        <h1 className='footerone-header'>Royals</h1>
                          
                            <p>Hotels & Resorts</p>

                        </div>
                        <div className='lastfooter-cont1'>
                        <p className='footerone-head'>QUICK LINKS</p>
                            
                            <p>Home</p>
                            <p>Terms & Condtion</p>
                            <p>FAQ'S</p>


                        </div>
                        <div className='lastfooter-cont1'>
                        <p className='footerone-head'>ADDRESS</p>
                        
                            <p>24 Obanlender str,</p>
                            <p>Ikeja, Lagos</p>
                            <p>Nigeria</p>


                        </div>
                        <div className='lastfooter-cont1'>
                            <p className='footerone-head'>RESERVATION</p>
                         
                            <p>+2340704837564</p>
                            <p>Support@example.com</p>



                        </div>
                        <div className='lastfooter-cont1'>
                            <p className='footerone-head'>FOLLOW US</p>
                            <div className='lastfooter-sociallink'>
                                <IoLogoInstagram className="socialcol" />
                                <FaXTwitter className="socialcol" />
                                <CiYoutube className="socialcol"/>
                            </div>




                        </div>

                    </div>









                </div>
            </section>
        </>

    )
}


