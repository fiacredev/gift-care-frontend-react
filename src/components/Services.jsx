
import React from 'react'
import { Link } from 'react-router-dom'
import firstD from '../images/firstD.jpg'
import secondT from '../images/team2.jpg'
import first from '../images/three.jpg'
import second from '../images/one.png'
import third from '../images/two.png'
import TestmonialsCard from './TestmonialsCard'
import BottomFooter from './BottomFooter'

function Services() {
  return (
    <>
        <nav>
      <div>
        <h3>diabetTreatment</h3>
      </div>
      <ul>
      <li><Link to="/" style={{textDecoration:"none",color:"#fff"}}>home</Link></li>
        <li><Link to='/about' style={{textDecoration:"none",color:"#fff"}}>about</Link></li>
        <li><Link to="/contact" style={{textDecoration:"none",color:"#fff"}}>contact</Link></li>
        <li><Link to="/services" style={{textDecoration:"none",color:"#fff"}}>services</Link></li>
        <li><Link to="/auth" style={{textDecoration:"none",color:"#fff"}}>system...</Link></li>
      </ul>
    </nav>   

    <section className='service'>
        <div className='main-cont-1'>
        <div className="cont-1">
            <h3 className='text-1'>our principles</h3>
            <h3 className='text-2'>what we do</h3>
            <p className='par'>
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing. <br />
            </p>
            <button>details</button>
        </div>
        
        <div className='cont-2'>
            <img src={secondT} alt="" />
        </div>
        </div>

        <div className='cont-3'>
            <h3>testimonials</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            </p>
        </div>
    </section>
    
    <div className='testmonialsCards'>
    <TestmonialsCard src={third} name="salvati" country="india" paragraph="happy with servcices of this hospital,  
    it is so crucial i terms of helping us continue reaching to our dreams."/>

    <TestmonialsCard src={second} name="salvati" country="mexico" paragraph="happy with servcices of this hospital,  
    it is so crucial i terms of helping us continue reaching to our dreams."/>

    <TestmonialsCard src={third} name="salvati" country="india" paragraph="happy with servcices of this hospital,  
    it is so crucial i terms of helping us continue reaching to our dreams."/>
    </div>

    <BottomFooter/>

    </>
  )
}

export default Services