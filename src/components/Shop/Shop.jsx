import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className="w-full bg-slate-100 py-5 relative">
            <h1 className='capitalize font-semibold text-xl sm:text-2xl text-red-400 mb-5 md:text-3xl'>all exclusive collections</h1>
            <div className='flex relative'>
                <div className="grid px-2  sm:px-0 gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center w-[80%]">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={() => handleAddToCart(product)}
                        ></Product>
                    ))}
                </div>
                <div className="sticky top-24 z-10 h-full">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;