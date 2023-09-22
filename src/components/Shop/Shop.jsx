import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    
    return (
        <div className='w-full flex my-5'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full'>
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='w-48'>
                <p className=''>Product total {cart.length}</p>
                <p className=''>Product total cost</p>
            </div>
     
            
        </div>
    );
};

export default Shop;