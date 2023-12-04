import React from 'react'

function Courosel() {
  return (
    <div style={{marginTop:"55px",marginBottom:"65px"}}>
        <div>
        <h6 style={{fontFamily:"forte",fontWeight:"900",textAlign:"center", color:"rgb(133, 214, 117)",fontSize:"25px"}}>REWARD</h6>
        <h1 style={{fontFamily:"arial black",fontWeight:"900", textAlign:"center",fontSize:"50px"}}>Clients review</h1>
         
        </div>
      {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators" >
    <button style={{backgroundColor:"rgb(133, 214, 117)"}} type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button style={{backgroundColor:"rgb(133, 214, 117)"}} type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button style={{backgroundColor:"rgb(133, 214, 117)"}} type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div style={{marginTop:"50px"}}  className="carousel-item active">
      <div><img src="https://mobirise.com/extensions/dinerm4/assets/images/face2.jpg"  width="520px" height="520px" style={{borderRadius:"15px",marginLeft:"70px"}}/>
      </div>
      <div className="carousel-caption" style={{textAlign:"left",marginLeft:"420px",paddingBottom:"100px",backgroundColor:"white"}}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeUUsBFQrgRKjYd1gLOM4aRZXoUcgUViSFu46Fqz1zFvGyGFZRlwE0mfeySm5hvW4R64&usqp=CAU' width="100px" height="100px" style={{opacity:"0.2"}}/>        
        <h4 style={{color:"black",marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
        <h4 style={{color:"black",marginTop:"25px",fontWeight:"800"}}>Ann Grayson <span style={{paddingBottom:"30px",marginLeft:"25px",color:"rgb(133, 214, 117)",fontWeight:"200"}}>_______</span></h4>
        <h6 style={{color:"grey"}}> Manager</h6>
      </div>
    </div>
    <div style={{marginTop:"50px"}}  className="carousel-item">
      <div><img src="https://mobirise.com/extensions/dinerm4/assets/images/face3.jpg"  width="520px" height="520px" style={{borderRadius:"15px",marginLeft:"70px"}}/>
      </div>
      <div className="carousel-caption" style={{textAlign:"left",marginLeft:"420px",paddingBottom:"100px",backgroundColor:"white"}}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeUUsBFQrgRKjYd1gLOM4aRZXoUcgUViSFu46Fqz1zFvGyGFZRlwE0mfeySm5hvW4R64&usqp=CAU' width="100px" height="100px" style={{opacity:"0.2"}}/>        
        <h4 style={{color:"black",marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
        <h4 style={{color:"black",marginTop:"25px",fontWeight:"800"}}>Ben Smith <span style={{paddingBottom:"30px",marginLeft:"25px",color:"rgb(133, 214, 117)",fontWeight:"200"}}>_______</span></h4>
        <h6 style={{color:"grey"}}> Designer</h6>
      </div>
    </div>
    <div style={{marginTop:"50px"}}  className="carousel-item">
      <div><img src="https://mobirise.com/extensions/dinerm4/assets/images/face4.jpg"  width="520px" height="520px" style={{borderRadius:"15px",marginLeft:"70px"}}/>
      </div>
      <div className="carousel-caption" style={{textAlign:"left",marginLeft:"420px",paddingBottom:"100px",backgroundColor:"white"}}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeUUsBFQrgRKjYd1gLOM4aRZXoUcgUViSFu46Fqz1zFvGyGFZRlwE0mfeySm5hvW4R64&usqp=CAU' width="100px" height="100px" style={{opacity:"0.2"}}/>        
        <h4 style={{color:"black",marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque dapibus ipsum semper, amet luctus turpis porttitor.</h4>
        <h4 style={{color:"black",marginTop:"25px",fontWeight:"800"}}>Jane Brown <span style={{paddingBottom:"30px",marginLeft:"25px",color:"rgb(133, 214, 117)",fontWeight:"200"}}>_______</span></h4>
        <h6 style={{color:"grey"}}> Client</h6>
      </div>
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
    

  </div>
  
 
</div> 


    </div>
  )
}

export default Courosel
