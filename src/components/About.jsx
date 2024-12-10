import React from 'react'
import firstD from '../images/firstD.jpg'
import white from '../images/one.png'
import two from '../images/two.png'
import AboutDocCard from './AboutDocCard'
import AboutMoreCard from './AboutMoreCard'
import '../Bootstrap icon/icons/bootstrap-icons.css'
import { Link } from 'react-router-dom'
import BottomFooter from './BottomFooter'


function About() {
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
        <li><Link to="/auth" style={{textDecoration:"none",color:"#fff"}}>system..</Link></li>
      </ul>
    </nav>
    
    <div className='aboutCard'>

    <AboutDocCard src={white} docName="Dr. lavanya sadanana" 

    docResponsbility="founder,senior doctor,slh hospital" 
    paragraph="we are 10 sparking mind exploring human communication via digital asssets. 
    our agency is based in kigali,so we are pretty fancy looking,
    also we put maximum effort to archieve set goals 
    and we make sure that our client understand what we do."/>   
    
    <AboutDocCard src={two} docName="Dir. manabah wuvah" docResponsbility="surgery treatment" 
    paragraph="we are 10 sparking mind exploring human communication via digital asssets. 
    our agency is based in kigali,so we are pretty fancy looking,
    also we put maximum effort to archieve set goals 
    and we make sure that our client understand what we do."/>   
    </div>

    <div className='aboutMoreCard'>

    <AboutMoreCard heading="over 100+ stretcher" 
    paragraph="a hospital is healthy care 
    institution providing patient 
    treatment with specialized medical."/>

    <AboutMoreCard heading="24 hours service"
    paragraph="a teaching hospital combining assistance to 
    people with teaching to medical students and nurses."/>

    <AboutMoreCard heading="high tech equipment"
    paragraph="some hospitals have outpatient departements 
    and some have chronic treatment units"/>
    </div>

    <BottomFooter/>

   </>
  )
}

export default About