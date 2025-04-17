# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!--     <div className='ourspecialservice-content-one'>
        <p>OUR SPECIALS</p>
        <h1>Enjoy Packages <br/> & Offers</h1>
   <div className='ourspecialservice-paragraph'>
    <p>The resturant and lounge offerings at the Hotel are guaranteed to <br/> pleae even the most discerning plates.Whether you are looking to <br/>satisfy a late night craving at Tick Tock Diner, indulge in some hearty <br/> Tuscan cuisin, or sip a cocktail with Friends, we got you covered</p>

   </div>
   <div className='ourspecialservice-date'>
    <p>OPENING HOURS</p>
    <div className="all-input">
    <h3>Monday-Friday</h3>
  <p>8:00 AM - 10:00 PM</p>
  <br/>
  <h3>Saturday</h3>
  <p>9:00AM-7:00AM</p>
    </div>

   </div>

      </div -->

      
    <section className="ourspecialservice-section">
      <div className="ourspecialservice-container">
      <div className='ourspecialservice-content-one'>
        <p>OUR SPECIALS</p>
        <h1>Enjoy Packages <br/> & Offers</h1>
   <div className='ourspecialservice-paragraph'>
    <p>The resturant and lounge offerings at the Hotel are guaranteed to <br/> pleae even the most discerning plates.Whether you are looking to <br/>satisfy a late night craving at Tick Tock Diner, indulge in some hearty <br/> Tuscan cuisin, or sip a cocktail with Friends, we got you covered</p>

   </div>
   <div className='ourspecialservice-date'>
    <p>OPENING HOURS</p>
    <div className="all-input">
    <h3>Monday-Friday</h3>
  <p>8:00 AM - 10:00 PM</p>
  <br/>
  <h3>Saturday</h3>
  <p>9:00AM-7:00AM</p>
    </div>

   </div>

      </div>

      <div className='ourspecialservice-two'>
        <img src={seviceimage}/>
        <img className='allnames' src={seviceimage}/>

</div>

      </div>
         
    </section>

    <section className='spa-section'>

      <div className="spa-container">
   <div className='spa-content-one'>
    <img src={spaimage}/>

   </div>
   <div className='spa-content-two'>
    <p>WELLNESS & SPA</p>
    <h1>Relaxing Moments at <br/> Our Spa Center.</h1>
    <div className='spa-content-paragraph'> 
      <p>A visit to our Spa is an utterly enjoyable expreience that will deleiver <br/> you heavenly comforts in a beautiful seeting. Enjoy a relaxing <br/> massage whilist listening to the sound of nature around you </p>

    </div>
 <div className='spa-content-list'> 
  {alllink.map((data) =>{
    const {id, text} = data;
    return(
      <>
      <div key={id} className='flex-item'>
        <div className='new-icons'>
        <IoIosCheckmark />
        </div>
   
      <p>{text}</p>
         
      </div>
      </>
    )
  })}

 </div>
</div>
      </div>

    </section>

     <section className='whatwedo-section'>  
      <div className='whatwedo-container'>
        <h3>TESTIMONIALS</h3>
        <h1 className='heading'>What Customer Say</h1>
        <div className='whatwedo-maincontainer'>
        <div className='whatwedo-one'>
          <h1>Royal</h1>
          <p>Hotels & Resorts</p>
          <div className='number'>
            <p className='all'>4.8</p>
          </div>
          <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
    </Stack>
          <p className='note-note'>1,428 views</p>
         <div className='lambe'>
          <button><p>WRITE YOUR REVIEW</p></button>
         </div>

        </div>

        <div className='whatwedo-two'>
        <h1>Excellent hotel</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>.Sint exercitationem tempore iste  sed doloribu .</p>
              <div className='whatwedo-image'>
                <img src={testi1}/>

              </div>
              <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
    </Stack>
              <p className='note-note'>Ilorin David</p>
              <p>Janurary 20, 2025</p>
</div>
<div className='whatwedo-two'>
<h1>First Class !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Sint exercitationem tempore iste sed doloribus.</p>
              <div className='whatwedo-image'>
                <img src={testi2}/>

              </div>
             
              <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
    </Stack>
    
              <p className='note-note'>Ilorin David</p>
              <p>Janurary 20, 2025</p>
              
           
</div>

        </div>
     

      </div>
      <div>

      </div>
     </section>

    <section className="allblogger-section">
          <div className="newmenzota">
          <p className="olamide">OUR BLOGS</p>
          <h1 className="olamide">Articles & News </h1>
          </div>
      <div className='blogs-container'> 
       
        <div className='blogs-card'> 
        {blogData.map((allblog)=>{
    const {id, image, heading, text, date,paragraph} = allblog
    return(
      <div>
      <div className='blogs-card-content'>
      <img src={image}/>
      <div className='blog-content'>
        <span className='pickup'>{text}</span>

       <span>{date}</span>
        <h2>{heading}</h2>
        <p>{paragraph}</p>

        <div className='readmore-btn'>
            <div>
              <button className='read-btn'>Read More</button>
            </div>
          <div>
          <span className='newallicon'><FaArrowRight className='newme'/></span>
          </div>
        
       
    
      </div>

      </div>
  
      </div>
    
      </div>
    )

  
   })}
        </div>
 
        <div>

        </div>
    


      </div>

    </section>
