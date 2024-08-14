import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
       <div className="offers-left">
          <h1>Ofertas</h1>
          <h1>Exclusivas para você</h1>
          <p>apenas nos produtos mais vendidos</p>
          <button> verifique agora</button>
       </div>
       <div className="offers-right">
          <img src={exclusive_image} alt="" />
       </div>
    </div>
  )
}

export default Offers