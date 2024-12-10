
import React from 'react'
import firstD from '../images/firstD.jpg'
import team from '../images/team.jpg'
import { Link } from 'react-router-dom'
import BottomFooter from './BottomFooter'

function Home() {
  return (
    <>
    <nav>
      <div>
        <h3>GiftCare</h3>
      </div>
      <ul>
        <li><Link to="/" style={{textDecoration:"none",color:"#fff"}}>home</Link></li>
        <li><Link to='/about' style={{textDecoration:"none",color:"#fff"}}>about</Link></li>
        <li><Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>contact</Link></li>
        <li><Link to="/services" style={{textDecoration:"none",color:"#fff"}}>services</Link></li>
        <li><Link to="/auth" style={{textDecoration:"none",color:"#fff"}}>system...</Link></li>
      </ul>
    </nav>

    <section className='home'>

        <div className='cont-1'>
            <h3>top class <span>healthy</span> <br /> 
            <span>care</span> hospital</h3>
            <p>Lorem ipsum dolor sit amet consectetur consectetur. <br />
            Lorem ipsum dolor sit amet consectetur. <br /></p>
            <button>know more</button>
        </div>

        <div>
            <img src={team} alt="" />
        </div>
    </section>
    <BottomFooter/>        

    </>
  )
}

export default Home