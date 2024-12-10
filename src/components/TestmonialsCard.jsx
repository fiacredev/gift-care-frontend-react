
import React from 'react'
import firstD from '../images/firstD.jpg'

function TestmonialsCard(props) {
  return (
    <>
    <div className='testmonials'>
    <center><img src={props.src} alt="" /></center>
        <h3 style={{color:"#333"}}>{props.name}</h3>
        <h5 style={{color:"#cfcfd1"}}>{props.country}</h5>
        <hr></hr>
        <p>
        {props.paragraph}
        </p>
    </div>
    </>
  )
}

export default TestmonialsCard