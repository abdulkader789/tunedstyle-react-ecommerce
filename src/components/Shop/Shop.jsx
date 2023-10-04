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
    const [total, setTotal] = useState(0)

    const calculateTotal = (price) => {
        const newTotal = total + price;
        setTotal(newTotal)
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
    console.log(cart.length)


    return (
        <div className="w-full bg-gray-50 p-5">
            <h1 className='uppercase font-semibold text-xl sm:text-2xl text-slate-700 mb-5 md:text-3xl'>all the exclusive collections</h1>
            <section className='flex flex-col-reverse md:flex-row'>
                <div className="grid px-2 w-[80%]  sm:px-0 gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={() => handleAddToCart(product)}
                            calculateTotal={() => calculateTotal(product.price)}
                        ></Product>
                    ))

                    }
                </div>
                <div className='md:w-60 w-full bg-orange-100 p-5 mx-auto'>
                    <h1 className='text-center mb-5'>Cart Items</h1>
                    {
                        cart.map((product) => (
                            <div className='flex mb-2'>
                                <p className='text-sm mr-3'>{product.title.split(' ')[0] + ' ' + product.title.split(' ')[1]
                                }</p>
                                <p className='text-sm'>{product.price}</p>
                            </div>
                        ))
                    }
                    <p className='text-left text-sm'> Total Product <span className='ml-3'>{cart.length}</span></p>
                    <p className='text-left text-sm'> Total Price <span className='ml-3'>{total}</span></p>
                </div>
            </section>
        </div>
    );
}

export default Shop;
