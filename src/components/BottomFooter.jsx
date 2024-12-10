import React from 'react'
import { Link } from 'react-router-dom'

function BottomFooter() {
  return (
    <div>
        <footer className='bottom-footer'>
        <h4>initialized by W.O.B &copy;copy right 2024.</h4>
        <ul>
            <li className='bi bi-facebook'><Link></Link></li>
            <li className='bi bi-whatsapp'><Link></Link></li>
            <li className='bi bi-instagram'><Link></Link></li>
            <li className='bi bi-twitter'><Link></Link></li>
        </ul>
        </footer>
    </div>
  )
}

export default BottomFooter