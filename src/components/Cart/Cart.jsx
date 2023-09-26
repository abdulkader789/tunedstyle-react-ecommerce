// Cart.js
import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cart, removeFromCart, total } = useCart();

    return (
        <div className="w-48 bg-orange-400 p-2 text-white">
            <h2>Cart Items:</h2>

            {cart.map((item, index) => (
                <div className="flex border shadow-md justify-evenly items-center text-white" key={index}>
                    <div>
                        <p className="text-xs text-left">{item.title.split(' ')[0]}</p>
                        <p className="text-xs text-left">{item.price}</p>
                    </div>
                    <img alt="" src={item.image} className="w-6 h-6"></img>
                    <button
                        className="text-white cursor-pointer text-xs"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <p className="text-left text-sm">Product total {cart.length}</p>

            <p className="text-left text-sm">
                Product total cost ${total}
            </p>
        </div>
    );
}

export default Cart;
