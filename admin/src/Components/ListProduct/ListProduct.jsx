import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import remove_icon from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allproducts,setAllProducts] = useState([])
  const  fetchInfo =  async ()=>{
     await fetch('/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
      fetchInfo()
  },[])
  const  remove_product = async (id) =>{
    await fetch('/removeproduct',{
      method:'POST',
      headers:{
        Acecept:'applicaation/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
     await fetchInfo()
  }
  return (
    <div className='list-product'>
          <h1>Todos os produtos</h1>
          <div className="listproduct-format-main">
            <p>Produtos </p>
            <p>Titulo</p>
            <p>preço antigo</p>
            <p>preço novo</p>
            <p>categoria</p>
            <p>remover</p>
          </div>
          <div className="listproduct-allproducts">
            <hr />
            {allproducts.map((product,index)=>{
               return(
                <>
                <div key={index} className="listproduct-format-main listproduct-format">
                   <img src={product.image} alt="" className="listproduct-product-icon" />
                   <p>{product.name}</p>
                   <p>R${product.old_price}</p>
                   <p>R${product.new_price}</p>
                   <p>{product.category}</p>
                   <img onClick={()=>{remove_product(product.id)}} src={remove_icon} alt="" className='listproduct-remove-icon' />
                </div>
                <hr />
               </>
               )
            })}
          </div>
    </div>
  )
}

export default ListProduct
