import React from 'react'
import './KnowUs.css'

export const KnowUs = () => {
  return (
    <div className='know-page'>
      <h1 className='know-title m-12'>Meet us</h1>
      <div className='flex w-full mt-10'>
      <div className='w-1/3'>
        <img src="./assets/diego.jpeg" alt="" className='img-us' />
        <p>Diego Cazap</p>
        <p>Co-founder</p>
      </div>
      <div className='w-1/3'>
        <img src="./assets/maru.jpeg" alt="" className='img-us'/>
        <p>Elisa Mosquera</p>
        <p>Co-founder</p>
      </div>
      <div className='w-1/3'>
        <img src="./assets/juli.jpeg" alt="" className='img-us'/>
        <p>Julian Lavagna</p>
        <p>Co-founder</p>
      </div>
      </div>
      
    </div>
  )
}
