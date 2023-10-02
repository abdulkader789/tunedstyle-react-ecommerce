// CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        calculateTotal(newCart);
    };

    // const removeFromCart = (productId) => {
    //     const updatedCart = cart.filter((item) => item.id !== productId);
    //     setCart(updatedCart);
    //     calculateTotal(updatedCart);
    // };
    const removeFromCart = (productId) => {
        const itemIndex = cart.findIndex((item) => item.id === productId);

        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(itemIndex, 1); // Remove the item at the found index
            setCart(updatedCart);
            calculateTotal(updatedCart);
        }
    };


    const calculateTotal = (updatedCart) => {
        const updatedTotal = updatedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(updatedTotal.toFixed(2));
    };

    return (
        <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
