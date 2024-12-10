import React from 'react'
import firstD from '../images/firstD.jpg'

function AboutDocCard(props) {
  return (
    <>
    <section className='about'>
    <div className='cont-1'>
    <div><img src={props.src} alt="" /></div>
    <div>
    <p className='text-1'><span>{props.docName}</span> <br />
    <span className='text1-0'>{props.docResponsbility}</span></p>
    <p className='text-2'>
        {props.paragraph}
    </p>
    <button>details</button>
    </div>
    </div>
    </section>
    </>
  )
}

export default AboutDocCard