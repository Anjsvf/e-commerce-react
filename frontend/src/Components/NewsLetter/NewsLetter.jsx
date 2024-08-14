import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
       <h1>Receba ofertas exclusivas no seu email</h1>
       <p>assine nossa nova carta e fique atualizado</p>
       <div>
        <input type="email"  placeholder='seu email'/>
        <button>inscreva-se</button>
       </div>
    </div>
  )
}

export default NewsLetter