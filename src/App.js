import './App.css';
import Bestseller from './Component.js/Bestseller';
import Bestcont from './Component.js/Bestcont';
import Bestseltit from './Component.js/Bestseltit';
import Order from './Component.js/Order';
import Welcome from './Component.js/Welcome';
import Ingredient from './Component.js/Ingredient';
import Menu from './Component.js/Menu';
import Deals from './Component.js/Deals';
import Youtube from './Component.js/Youtube';
import Team from './Component.js/Team';
import Ask from './Component.js/Ask';
import Download from './Component.js/Download';
import Address from './Component.js/Address';
import Courosel from './Component.js/Courosel';
import Home from './Component.js/Home';
import Navbar from './Component.js/Navbar';

function mega(Bestcont){
  return(
    <Bestseller
    img={Bestcont.img}
    tit={Bestcont.tit}
    des={Bestcont.des}
    rat={Bestcont.rat}/>
  )
}
function App() {

  return (
    <>
    <div >
      <Navbar/>
      <Home/>
      <Bestseltit/>
      <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-around",margin:"10px",padding:"70px"}}>{Bestcont.map(mega)}</div>
      <Order/>
      <Welcome/>
      <Ingredient/>
      <Menu/>
      <Deals/>
      <Youtube/>
      <Courosel/>
      <Team/>
      <Ask/>
      <Download/>
      <Address/>
    
    </div>
    </>
  );
}

export default App;
