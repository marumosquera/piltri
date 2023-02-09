import React from 'react'
import './ContactButton.css'
import { Link } from 'react-router-dom'

export const ContactButton = ({cta}) => {
  return (
    <><Link to="/contact">


<button className='cta-btn'>{cta}</button>
    </Link>
    </>
  )
}
