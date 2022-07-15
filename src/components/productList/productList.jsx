import React from 'react'
import Product from '../product/product.jsx'
import './productList.css'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className='pl-title'>my projects</h1>
            <p className='pl-desc'>
                Here you will find my works or works I've been part of. Always hoping you like them! 
            </p>
        </div>
        <div className="pl-list">
        {products.map(p=>(
            <Product img={p.img} link={p.link} key={p.id}/>
        ))}
        </div>
    </div>
  )
}

export default ProductList