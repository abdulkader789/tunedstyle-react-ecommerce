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
        <div className='flex justify-center my-5 w-full'>
            <div className='w[80%]   grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='w-[20%] p-5 box-shadow'>Product added {cart.length}</div>
            
            
        </div>
    );
};

export default Shop;