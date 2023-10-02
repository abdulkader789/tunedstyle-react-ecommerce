import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { title, image, price } = props.product
    const handleAddToCart = props.handleAddToCart
    const newTitle = title.split(' ')[0] + ' ' + title.split(' ')[1] + ' ' + title.split(' ')[2]




    return (
        <div className='card-shadow phone-width box-border w-52 flex flex-col px-2 h-64 mb-3 bg-white place-self-center relative'>

            <img alt='' className='h-[50%] w-full px-8 my-2' src={image} ></img>

            <p className='text-sm mb-2'>{newTitle}</p>
            <p className='text-red-400 text-sm mb-2'>$ {price}</p>

            <button onClick={() => {
                handleAddToCart(props.product)

            }} className='hover:opacity-[0.8] hover:text-sm absolute w-full left-0 bottom-0  py-2 text-xs'>Add to Cart
                <FontAwesomeIcon className='text-orange-500 ml-2' icon={faShoppingCart} />

            </button>
        </div>

    );
};

export default Product;