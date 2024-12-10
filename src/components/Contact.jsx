import React from 'react'
import { Link } from 'react-router-dom'
import BottomFooter from './BottomFooter'

function Contact() {
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
    
    <section className='contact' id='contact'>        

<div className="contactMe">
<div>
    <h3>email us</h3>
    <h4>fiacredeveloper@gmail.com</h4>
</div>
<div>
    <h3>contact us</h3>
    <h4>+250 794 451 9927</h4>
</div>
</div>
<h3>let's get in touch through dis</h3>
<form action="">
<input type="name" id="" placeholder="Name"/>
<input type="email" id placeholder="Email"/>
<input type="text" name="" id="" placeholder="Subject"/>
<input type="text" id="" name="" placeholder="Comment"/>
<center><button>send message</button></center>
 </form>
 
    </section>

    <BottomFooter/>

     </>
  )
}

export default Contact