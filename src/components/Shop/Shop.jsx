// Shop.js
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import { useCart } from '../Cart/CartContext';

function Shop() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    return (
        <div className="w-full bg-slate-100 py-5">
            <h1 className='uppercase font-semibold text-xl sm:text-2xl text-red-400 mb-5 md:text-3xl'>all the exclusive collections</h1>
            <div className="grid px-2 min-600 sm:px-0 gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center w-full">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={() => addToCart(product)}
                    ></Product>
                ))}
            </div>
        </div>
    );
}

export default Shop;
