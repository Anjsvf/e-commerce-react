import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
         <div className="productdisplay-img-list">
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
         </div>
         <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
         </div>
      </div>
      <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="productdisplay-right-stars">
           <img src={star_icon} alt="" />
           <img src={star_icon} alt="" />
           <img src={star_icon} alt="" />
           <img src={star_icon} alt="" />
           <img src={star_dull_icon} alt="" />
           <p>(124)</p>
       </div>
       <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
               R${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              R${product.new_price}
            </div>
       </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur, adipreprehenderit 
            dignissimos dicta ill
            o temporibus voluptatum,  odio eos!
          </div>
          <div className='productdisplay-right-size'>
              <h1>selecione o  tamanho</h1>
              <div className="productdisplay-right-sizes">
                <div>P</div>
                <div>M</div>
                <div>G</div>
                <div>GG</div>
                <div>XG</div>
              </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>Adicionar</button>
          <p className='productdisplay-right-category'><span>categoria:</span>camisas, femininas</p>
          <p className='productdisplay-right-category'><span>Tags:</span>tedencias . recentes</p>
      </div>
    </div>
  )
}

export default ProductDisplay
