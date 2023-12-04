import React, { useState ,useEffect} from 'react'

function Navbar() {
    // document.addEventListener('scroll',() => {
    // const navbar=document.querySelector('navbar');
 
    const [navbar,setNavbar]=useState({
      backgroundColor:"rgb(231, 54, 54)"
    });
    const listenScroll = () => {
      if(window.scrollY>0){
        setNavbar(
          {backgroundColor:"rgb(29, 28, 28)"}
        );
      }
      else{
        setNavbar(
            {backgroundColor:"rgb(231, 54, 54)"}
          );
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', listenScroll);
    
      // return () =>
      //   window.removeEventListener('scroll', listenScroll);
    }, [navbar]);
  
    //  const navbar1=document.getElementsByClassName('navbar');
    //  navbar1.style.backgroundColor="black";

  //   if(window.scrollY>0){
  //     navbar1.style.backgroundColor="black";
  //     // navbar1.classList.add('scrolled');
  //   }
  //   else{
  //     navbar1.style.backgroundColor="red";
  //     // navbar1.classList.remove('scrolled');
  //   }
  
  return (
    <div  className='navbar' style={navbar}>
      
        <div style={{display:"flex",marginLeft:"100px"}}>
            <img src='https://mobirise.com/extensions/dinerm4/assets/images/logo2.png' width="60px" height="60px"/>
            <h4 style={{fontFamily:"forte",fontWeight:"500",fontSize:"26px",marginLeft:"10px",marginTop:"15px"}}>DINERM4</h4>
        </div>
        <div style={{display:"flex"}}>
        <button id='buy1' style={{fontWeight:"500",fontSize:"18px",background:"none",border:"none",paddingBottom:"15px"}}>HOME</button>
        <div className="dropdown" style={{marginLeft:"50px"}}>
        <button id='buy2' type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" style={{fontWeight:"500",fontSize:"18px",background:"none",border:"none"}}>LIVE DEMO</button>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Thai Food Demo</a></li><hr/>
             <li><a className="dropdown-item" href="#">Pizza Bar Demo</a></li><hr/>
             <li><a className="dropdown-item" href="#">Sushi Cafe Demo</a></li>
           </ul>
        </div>
        <div className='dropdown'>
        <button id='buy3' type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" style={{fontWeight:"500",fontSize:"18px",marginLeft:"35px",background:"none",border:"none"}}>LIVE DEMO BLOCK</button>
        <ul className="dropdown-menu" style={{marginLeft:"40px",zIndex:"1"}}>
        <li><a className="dropdown-item" href="#">Headers / Features / Pricing / Info</a></li><hr/>
             <li><a className="dropdown-item" href="#">Headers / Features / Pricing / Info</a></li><hr/>
             <li><a className="dropdown-item" href="#">Content / Shop / Accordions / Video</a></li><hr/>
             <li><a className="dropdown-item" href="#">Gallery / Team / Testmonials / Forms</a></li><hr/>
             <li><a className="dropdown-item" href="#">Progress / Maps / Contacts / Footers</a></li>
           </ul>
        </div>
        <button id='buy' style={{borderRadius:"30px",width:"130px",height:"53px",marginRight:"130px",border:"none",marginLeft:"50px"}}>BUY NOW</button>
        </div>
      
    </div>
  )
}

export default Navbar
