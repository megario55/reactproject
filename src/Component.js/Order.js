import React from 'react'

function Order() {
  return (
    <div className='order' >
        <div style={{marginLeft:"100px",paddingTop:"100px"}}>
            <p style={{color:"white",fontSize:"30px"}}>BUY <span style={{fontSize:"55px",fontWeight:"800"}}>2</span> GET <span style={{fontSize:"55px",fontWeight:"800"}}>1</span></p>
            <h1 style={{color:" rgb(136, 230, 136)",fontSize:"100px",fontWeight:"800"}}>FREE PIZZA!</h1>
            <button className='ord'><i className="fa fa-shopping-cart" aria-hidden="true"></i> ORDER ONLINE</button>

        </div>
      
    </div>
  )
}

export default Order
