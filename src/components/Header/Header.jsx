import React from 'react';
import './Header.css'

const Header = () => {


  return (
    <nav className="w-full flex py-5 nav-bg">
    
        <div className="w-[30%] flex justify-center items-center">
        <h2><a href='/'>ShopWave</a></h2>
        </div>
       
        <div className="w-[70%]">
          <ul className='flex justify-evenly'>
            <li>
               <a href='/shop'>Shop</a>
            </li>
            <li>
             <a href='/order'>Order</a>
            </li>
            <li>
             <a href='/inventory'>Inventory</a>
            </li>
            <li>
             <a href='/login'>Login</a>
            </li>
           
          </ul>
        </div>
   
    </nav>



    );
};

export default Header;