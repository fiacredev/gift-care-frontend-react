import React from 'react'

function AboutMoreCard(props) {
  return (
    <>
    <div className='aboutMore'>
    <div><h1 className='bi bi-tags'></h1></div>
    <h3>{props.heading}</h3>
    <p>
        {props.paragraph}
    </p>
    <button>read more</button>
    </div>
    </>
  )
}

export default AboutMoreCard