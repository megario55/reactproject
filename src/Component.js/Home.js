import React from 'react'

function Home() {
  function alert1(){
    alert("THANKS FOR PURCHASE")
  }
  return (
    <div>
    <div className='home'>
        <div className='home1' style={{marginTop:"50px"}}>
        <h6 style={{fontWeight:"700",textAlign:"left", color:"rgb(236, 195, 8)",fontSize:"27px"}}>HAPPY HOUR SPECIAL<span className='homspan' style={{fontWeight:"400"}}>_________</span></h6>
         <h1 style={{fontWeight:"850",fontSize:"95px",color:"white"}}>PIZZA BAR</h1>
        <h5 style={{color:"white",fontSize:"18px",marginTop:"20px",fontWeight:"450"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</h5>
        <button className='ord4' onClick={alert1}><i className="fa fa-shopping-cart" aria-hidden="true" ></i> ORDER ONLINE</button>
        </div>
        <div style={{zIndex:"1"}}>
            <img  style={{marginLeft:"45px",marginTop:"50px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/05.png' width="500px" height="500px"/>
        </div> 
    </div>
    <div className='only' >
        <h4 style={{fontWeight:"700",paddingTop:"30px",paddingRight:"30px"}}>Only</h4>
        <h4 style={{fontWeight:"800",color:"rgb(231, 54, 54)",fontSize:"55px",paddingTop:"-20px"}}>$19</h4>
    </div>
  </div>
  )
}

export default Home
