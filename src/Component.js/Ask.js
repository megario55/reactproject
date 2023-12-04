import React from 'react'

function Ask() {
  function alert1(){
    alert("Your response submitted successfully ")
  }
  return (
    <div className='form'>
      <div className='form1'>
      <h4 style={{fontWeight:"900",marginTop:"30px"}}>Ask a question</h4><br/>
      <form action="">
      <div className="mb-3 mt-3">
    <input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
  </div>
  <div className="mb-3 mt-3">
    <input type="number" className="form-control" id="number" placeholder="Phone Number" name="number"/>
  </div>
  <div className="mb-3 mt-3">
  <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Your Message"></textarea>

  </div>
   </form>
   <button className='ord' onClick={alert1}> SEND MESSAGE</button>
   {/* <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=535&amp;height=545&amp;hl=en&amp;q=salem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections NYT</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:545px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:545px;}.gmap_iframe {height:545px!important;}</style></div> */}

      </div>
      <div style={{marginLeft:"15px",marginTop:"45px"}}>
      <iframe
              src="https://maps.google.com/maps?width=535&amp;height=545&amp;hl=en&amp;q=salem&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
      </div>
    </div>
  )
}

export default Ask
