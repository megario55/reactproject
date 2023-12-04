import React from 'react'

function Bestseller(props) {
  return (
    <div className='bestsel'>
       
        <img style={{marginTop:"10px"}} src={props.img} width="165px"height="160px"/>
        <h4>{props.tit}</h4>
        <p style={{color:"rgb(128, 125, 125)"}}>{props.des}</p>
        <h4>{props.rat}</h4><br/>
        <p className='id'> <span style={{backgroundColor:"rgb(224, 192, 9)",borderRadius:"50%",padding:"22px"}}><i className="fa fa-shopping-cart" aria-hidden="true"></i>
</span></p>
       </div>
    
  )
}

export default Bestseller
