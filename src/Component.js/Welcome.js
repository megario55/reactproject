import React from 'react'

function Welcome() {
  return (
    <div className='wel'>
        <div className='wel1' style={{width:"500px",height:"550px",padding:"20px", textAlign:"left"}}>
        <h6 style={{fontFamily:"forte",fontWeight:"900",color:"rgba(238, 42, 42, 0.952)",fontSize:"25px"}}>WELCOME</h6>
        <h1 style={{fontFamily:"arial black",fontWeight:"900",fontSize:"50px"}}>We make the best pizza in your town</h1>
         <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper.</b></p>
        <p style={{color:'rgb(128, 125, 125)'}}>Suspendisse eu lorem vitae odio eleifend imperdiet. Duis in efficitur sem, at lobortis nulla. In nec velit sollicitudin, mollis tortor semper, ultrices mi.</p>
        <br/>
        <button className='welbut'><i className="fa fa-location-arrow" aria-hidden="true"></i>  GET DIRECTION</button>
        </div>
        <div className='wel2' style={{padding:"20px",width:"200px"}}>
           <div > <img style={{color:"rgb(231, 54, 54)"}} src='https://pngfre.com/wp-content/uploads/apple-logo-15-1024x1024.png' width="80px" height="80px"/>
           <br/><br/> 
            <h6>A new look on the right food!</h6>
            </div><br/>
            <div style={{paddingTop:"65px"}}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu5cdNisuVImia-zKdKWIMPUAUIiFhsGZYakcly8kmkksoXEO' width="60px" height="60px"/>
            <br/> <br/>
            <h6>The use of natural best quality products</h6>
            </div><br/>
            <div style={{paddingTop:"65px"}}> <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQL3O_tM8-_a5baiS28hbwAz9F6ZFoA-qVU0JSr3XCJLDXLEZQ' width="60px" height="60px"/>
             <br/> <br/>
            <h6>World’s best Chef and Nutritionist!</h6>
            </div>
            

        </div>
        <div>
           <img src='https://mobirise.com/extensions/dinerm4/assets/images/05.png' width="450px" height="450px"/>
           <div style={{paddingTop:"20px"}}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZVo61B0BZcko9xJ81rRW5H922AMsiCUJnSQTRFrLKfdINzJi' width="100px" height="100px"/>
            <br/> 
            <h6>Fastest delivery on your door step</h6>
            </div>
        </div>
    </div>
  )
}

export default Welcome
