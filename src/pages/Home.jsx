import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";
 import  { hoteldata} from '../../data'
 import {blogData} from "../../data"
 import alllink from "../../data"
import image1 from '../assets/drink.png';
import testi1 from '../assets/testimonial1.png';
import testi2 from '../assets/testimonial2.png'
import seviceimage from '../assets/imageme.png'
import image2 from '../assets/drink2.png'
import displayimage1 from '../assets/displayimage1.png';
import displayimage2 from '../assets/displayimage2.png';
import displayimage3 from '../assets/displayimage3.png'
import spaimage from '../assets/spaimage.png'
const Home = () => {
  return (
    <div>
    <div className='homecomponent-section'>
        <div className='homecomponent-container'>
       
          <div className="backgroundlay"></div>
       <div className='homecomponent-content'>
       <p className='content-header'>Luxery</p>
      
        <p className='content-one'>HOTELS & RESORTS</p>
         <p className='content-two'>Memories that will last forever</p>
         <div className='content-button'>
          <button><p>VIEW OUR ROOMS</p></button>
         </div>

       </div>
        </div>

    </div>
    <section className='pickdate-section'>
      <div className='pickdate-container'>
        <div className='pickdate-one'>
        <SlCalender />
  <p>Arrival Date</p>
  <MdOutlineKeyboardArrowDown className='pickdate-icon'/>
  
        </div>
        
        <div className='pickdate-one'>
        <SlCalender />
          <p>Depature Date</p>
          <MdOutlineKeyboardArrowDown className='pickdate-icon'/>

</div>
<div className='pickdate-one'>
  <p>Adult</p>
       <MdOutlineKeyboardArrowDown className='pickdate-icon'/>
</div>
<div className='pickdate-one'>
 <p>Children</p>
      <MdOutlineKeyboardArrowDown className='pickdate-icon'/>
</div>
<div className='allpick-btn'>
<button><p>CHECK AVAILABILITY</p></button>
</div>
      </div>

    </section>

    <section className='thirdcomponent-section'>
      <div className='thirdcomponent-container'>
        <div className='thirdcomponent-container-one'>
          <img src={image1} />
          <div className='backgroundlay'></div>
          <div className='thirdcomponent-overlay'>
            <p>Resturants & Bars</p>
            <h1>The Best Rates And <br/>Special Perks </h1>
            <div className='thirdcomponent-btn'>
              <button><p>FIND OUT MORE</p></button>
            </div>

          </div>

        </div>
        <div className='thirdcomponent-container-one'>
<img src={image2}/>
<div className='backgroundlay'></div>
          <div className='thirdcomponent-overlay'>
            <p>Resturants & Bars</p>
            <h1>The Best Rates And <br/>Special Perks </h1>
            <div className='thirdcomponent-btn'>
              <button><p>FIND OUT MORE</p></button>
            </div>

          </div>
</div>
<div className='thirdcomponent-container-content'>
<p>OUR SPECIAL</p>
<h1>Enjoy Packages <br/>& Offers</h1>
</div>
  <div>

  </div>
      </div>

    </section>

    <section className='gallery-section'> 
      <div className='gallery-container'>
  <div className='gallery-container-one'>
  <p>Our Special</p>
  <h1>Where Simple <br/> Luxury & Tranquility <br/> Meet</h1>

  </div>
  <div className='gallery-container-two'>
    <h2>Royal Hotels and Resorts is a distinctive collection of <br/> hotels Chosen for their rich heritage.</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tenetur maiores reiciendis qui repudiandae <br/> vero iure expedita consequuntur? Dicta labore quaerat assumenda numquam quo <br/>consectetur minus enim rerum et repellendus!</p>
   <div className='gallery-btn'>
  <button>Discover More</button>
   </div>
</div>
      </div>

    </section>



    <section className='displayimages-section'>
 <div  className='displayimages-container'>
  <div className='displayimage-one'>
   <img src={displayimage1}/>
  </div>
  <div className='displayimage-two'>
   <img src={displayimage2}/>
   <div className= "displayimage-two-content">  
    <p>TOP REASON TO STAY</p>
    <h1>MIDTOWN ATTRACTION</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellat provident ad at, fugiat recusandae?</p>

   </div>
</div>
<div className='displayimage-three'>
  <img src={displayimage3}/>
</div>

 </div>
    </section>



    <section className="fourth-section">
 
      <div className='fourth-capper'>
      <div className="fourth-header">
      <p>OUR SPECIAL</p>
      <h1>Rooms & Suites</h1>
      </div>
    
        <div className="fourth-container1">
          
      
     
        {hoteldata.map((data)=>{
           const {id, image,roomType, from, description,price} = data
           return(
            <>
            <div className='fourth-card' key={id}>
              <img src={image}/>
             <div className="fourth-content">
                <div className='forth-content-one'>
                  <h1>{roomType}</h1>
                  <p>{description}</p>

                </div>
             
                <div className='forth-content-two'>
                <div className='forth-content-one'>
                  <p>{from}</p>

                </div>
                <div className='forth-content-one'>
                  <p>{price}/<span>Night</span></p>

                </div>
                  </div>

              </div>

            </div>
            </>
           )
        })}

      </div>
      </div>

    </section>


      
    
    </div>
  )
}

export default Home