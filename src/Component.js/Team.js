import React from 'react'

function Team() {
  return (
    <div  style={{backgroundColor:"rgb(231, 54, 54)",width:"100%",height:"700px",paddingTop:"40px",marginTop:"20px"}}>
         <h6 style={{fontFamily:"forte",fontWeight:"900",textAlign:"center", color:"white",fontSize:"25px"}}>TEAM</h6>
        <h1 style={{fontFamily:"arial black",fontWeight:"900", textAlign:"center", color:"white",fontSize:"50px"}}>Behind the taste</h1>
       <div className='team'>
       <div className='team1'>
        <img style={{borderRadius:"50%",marginTop:"25px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/face1.jpg' width="150px" height="150px"/>
        <h4 style={{fontWeight:"700",marginTop:"30px"}}>John Smith</h4>
        <p style={{color:"rgb(155, 153, 153)",fontSize:"20px",fontWeight:"600"}}>Manager</p>
        <img src='https://logowik.com/content/uploads/images/social-media7697.jpg' width="180px" height="120px"/>
        </div> 
        <div className='team1'>
        <img style={{borderRadius:"50%",marginTop:"25px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/face2.jpg' width="150px" height="150px"/>
        <h4 style={{fontWeight:"700",marginTop:"30px"}}>Ann Jane</h4>
        <p style={{color:"rgb(155, 153, 153)",fontSize:"20px",fontWeight:"600"}}>Desinger</p>
        <img src='https://logowik.com/content/uploads/images/social-media7697.jpg' width="180px" height="120px"/>
        </div>
        <div className='team1'>
        <img style={{borderRadius:"50%",marginTop:"25px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/face3.jpg' width="150px" height="150px"/>
        <h4 style={{fontWeight:"700",marginTop:"30px"}}>Ben James</h4>
        <p style={{color:"rgb(155, 153, 153)",fontSize:"20px",fontWeight:"600"}}>Chief</p>
        <img src='https://logowik.com/content/uploads/images/social-media7697.jpg' width="180px" height="120px"/>
        </div>
        <div className='team1'>
        <img style={{borderRadius:"50%",marginTop:"25px"}} src='https://mobirise.com/extensions/dinerm4/assets/images/face4.jpg' width="150px" height="150px"/>
        <h4 style={{fontWeight:"700",marginTop:"30px"}}>Dan Brown</h4>
        <p style={{color:"rgb(155, 153, 153)",fontSize:"20px",fontWeight:"600"}}>Chief</p>
        <img src='https://logowik.com/content/uploads/images/social-media7697.jpg' width="180px" height="120px"/>
        </div>
        </div>
    </div>
  )
}

export default Team
