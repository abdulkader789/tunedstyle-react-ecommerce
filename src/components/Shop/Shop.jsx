// Shop.js
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);

    };
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
    console.log(cart.length)


    return (
        <div className="w-full bg-gray-50 py-5">
            <h1 className='uppercase font-semibold text-xl sm:text-2xl text-slate-700 mb-5 md:text-3xl'>all the exclusive collections</h1>
            <div className="grid px-2 min-600 sm:px-0 gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center w-full">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product)}
                    ></Product>
                ))

                }
            </div>
        </div>
    );
}

export default Shop;
