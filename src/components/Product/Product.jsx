import React from 'react';
import './Product.css'
const Product = (props) => {
    const {title,image,price}=props.product
    const handleAddToCart=props.handleAddToCart
    const newTitle=title.split(' ')[0]+' '+title.split(' ')[1]+' '+title.split(' ')[2]
  
 
    

    return (
        <div className='box-border w-52 flex flex-col shadow-lg border px-2 h-64 mb-2 sm:place-self-center relative'>
       
           <img className='h-[50%] w-full px-8 my-2' src={image} ></img>
           
                <p className='text-sm mb-2'>{newTitle}</p>
                <p className='text-red-400 text-sm mb-2'>$ {price}</p>
           
           <button  onClick={()=>{handleAddToCart(props.product);}} className='hover:opacity-[0.8] absolute w-full left-0 bottom-0  py-1 text-xs bg-orange-500 text-white'>Add to Cart</button>
        </div>
    );
};

export default Product;