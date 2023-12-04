import React from 'react'

function Address() {
  return (
    <div className='address'>
        <div className='add1'>
            <div style={{marginTop:"50px",color:"grey"}}>________________________________________________________________________</div>
            <div> <img src='https://mobirise.com/extensions/dinerm4/assets/images/logo2.png' width="140px" height="140px"/></div>
            <div style={{marginTop:"50px",color:"grey"}}>________________________________________________________________________</div>
        </div>
        <div className='add2'>
            <div>
            <h4 style={{fontWeight:"700",marginTop:"30px",textAlign:"center"}}>Address</h4>
            <p style={{color:"rgb(155, 153, 153)",fontSize:"18px",fontWeight:"600",textAlign:"center",marginTop:"20px"}}>570 8th Ave,<br/>New York, NY 10018,<br/> United States</p>
            </div>
            <div>
            <h4 style={{fontWeight:"700",marginTop:"30px",textAlign:"center"}}>Book a table</h4>
            <h4 style={{color:"rgb(155, 153, 153)",fontSize:"18px",fontWeight:"600",textAlign:"center",marginTop:"20px"}}>Dogfood och Sliders foodtruck.</h4>
            <h4 style={{color:"rgb(155, 153, 153)",fontSize:"18px",fontWeight:"600",textAlign:"center"}}>Under Om oss kan ni läsa</h4>
            <h4 style={{fontWeight:"700",marginTop:"30px",textAlign:"center",color:"rgba(238, 204, 11, 0.801)"}}>(850) 435-4155</h4>
            </div>
            <div>
            <h4 style={{fontWeight:"700",marginTop:"30px",textAlign:"center"}}>Opening hours </h4>
            <h4 style={{color:"rgb(155, 153, 153)",fontSize:"18px",fontWeight:"600",textAlign:"center",marginTop:"20px"}}>Monday – Friday</h4>
            <h4 style={{color:"rgb(155, 153, 153)",fontSize:"18px",fontWeight:"600",textAlign:"center"}}>10.00 AM – 11.00 PM</h4>
            </div>
            <div>
            <h4 style={{fontWeight:"700",marginTop:"30px",textAlign:"center",marginBottom:"20px"}}>Instagram feed </h4>
            <img style={{borderRadius:"10px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/01.jpg' width="80px" height="80px"/>
            <img style={{borderRadius:"10px",marginLeft:"8px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/02.jpg' width="80px" height="80px"/>
            <img style={{borderRadius:"10px",marginLeft:"8px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/03.jpg' width="80px" height="80px"/>
            </div>
        </div>
        <div style={{marginTop:"40px",color:"grey",marginLeft:"60px",marginRight:"70px"}}><hr/></div>
        <div  className="add3" style={{display:"flex",marginTop:"50px"}}>
            <h5 style={{marginLeft:"80px",fontSize:"18px"}}>About us</h5>
            <h5 style={{marginLeft:"40px",fontSize:"18px"}}>Menu</h5>
            <h5 style={{marginLeft:"40px",fontSize:"18px"}}>Blog</h5>
            <h5 style={{marginLeft:"40px",fontSize:"18px"}}>Gallery</h5>
            <h5 style={{marginLeft:"40px",fontSize:"18px"}}>Help</h5> 
            <h5 style={{marginLeft:"40px",fontSize:"18px"}}>Contact</h5>  
        </div>
        <h5 style={{marginLeft:"80px",fontSize:"18px",marginTop:"25px"}}>© Copyright 2023 Mobirise - All Rights Reserved</h5> 
        <div className='addbut'>
            <button className='but'><i class="fa fa-twitter" aria-hidden="true"></i></button>
            <button className='but'><i class="fa fa-youtube-play" aria-hidden="true"></i></button>
            <button className='but'><i class="fa fa-facebook" aria-hidden="true"></i></button>
            <button className='but'><i class="fa fa-vimeo" aria-hidden="true"></i></button>
        </div>
        
      
    </div>
  )
}

export default Address
