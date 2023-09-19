import React from 'react';
import './Product.css'
const Product = (props) => {
    const {title,image,price}=props.product
    const handleAddToCart=props.handleAddToCart
  
 
    

    return (
        <div className='card-shadow h-96 w-72 relative'>
       
           <img src={image} className='h-[60%] w-full px-5 py-2'></img>
           
                <p className='h-[20%] text-sm p-3'>{title}</p>
                <p className='text-red-400'>$ {price}</p>
           
           <button  onClick={()=>{handleAddToCart(props.product);}} className='btn-add text-gray-800 text-sm w-full absolute bottom-0 left-0 py-2'>Add to Cart</button>
        </div>
    );
};

export default Product;