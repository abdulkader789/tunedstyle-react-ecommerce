import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        total += product.price;
        quantity = quantity + product.quantity;
    }

    return (
        <div className='md:w-60 w-full bg-orange-100 p-5 mx-auto'>
            <h1 className='text-center mb-5'>Cart Items</h1>
            <p className='text-left text-sm'> Total Product <span className='ml-3'>$ {cart.length}</span></p>
            <p className='text-left text-sm'> Total Price <span className='ml-3'>$ {total}</span></p>

        </div>
    );
};

export default Cart;