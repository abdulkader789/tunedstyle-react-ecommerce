import React from 'react';
import './Header.css'

const Header = () => {


  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <h2><a href='/'>ShopWave</a></h2>
        </div>
       
        <div className="nav-item-container">
          <ul>
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
      </div>
    </nav>



    );
};

export default Header;