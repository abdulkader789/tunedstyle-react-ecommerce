import React, { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart'
import { useCart } from '../Cart/CartContext'; // Import the useCart hook

function NavBar() {
  const { cart } = useCart();
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }


  return (
    <div className='w-full bg-white z-50 flex justify-evenly sticky top-0 items-center h-14 shadow-sm border'>
      <div className={`absolute right-0 top-14 z-50 ${isCartOpen ? 'block' : 'hidden'}`}>
        <Cart></Cart>
      </div>
      <div className=" lg:h-16 w-full box-border flex flex-col lg:flex-row  lg:pb-0 justify-evenly items-center">

        <div className="logo flex w-full justify-between lg:w-48">
          <div className="mobile-icons w-20 lg:hidden cursor-pointer" onClick={toggleNav}>
            <FontAwesomeIcon className='text-black' icon={faBars} />
          </div>
          <h1 className='w-full lg:w-[100%] px-2 text-black'>TunedStyle</h1>


          <div className='w-[40%] lg:hidden flex text-black justify-evenly items-center'>
            <FontAwesomeIcon onClick={toggleSearch} className='faSearch cursor-pointer' icon={faSearch} />

            <FontAwesomeIcon className='' icon={faHeart} />
            <div onClick={toggleCart} className='cursor-pointer relative' >
              <FontAwesomeIcon icon={faShoppingCart} />
              <button className='absolute right-0 -top-3 bg-red-400 text-white text-xs px-1 rounded-lg'>{cart.length}</button>

            </div>
          </div>
        </div>

        {/* search section */}

        <div className={`${isSearchOpen ? 'flex' : 'hidden'} flex-1 items-center lg:w-96 w-full relative lg:pl-5 lg:flex lg:justify-center`}>
          <input className='w-full relative  lg:w-[600px]  h-0 text-sm text-black  py-4' type="text" placeholder="Search Products" />
          <button type="button" className='lg:relative lg:right-12 absolute right-2'>
            <FontAwesomeIcon className='faSearch cursor-pointer' icon={faSearch} />
          </button>
        </div>

        <div className='hidden cursor-pointer text-black w-20 lg:w-40 lg:flex justify-around items-center'>

          <FontAwesomeIcon icon={faHeart} />
          <div onClick={toggleCart} className='cursor-pointer relative' >
            <FontAwesomeIcon icon={faShoppingCart} />
            <button className='absolute right-0 -top-3 bg-red-400 text-white text-xs px-1 rounded-lg'>{cart.length}</button>

          </div>
        </div>
        <div className='w-48 hidden lg:block'>
          <ul className='text-black flex justify-evenly'>
            <li className='cursor-pointer   text-sm px-2 py-1'>Sign-up</li>
            <li className='cursor-pointer bg-blue-400 text-white text-sm px-4 py-1'>Login</li>
          </ul>
        </div>
      </div>

      <nav className={`${isNavOpen ? 'slide-in' : 'slide-out'} w-40 z-20 absolute bg-green-600 lg:hidden top-20`}>


        <h2><a href='/'>ShopWave</a></h2>
        <ul className='text-black flex flex-col justify-evenly'>
          <li className='cursor-pointer'>Sign-up</li>
          <li className='cursor-pointer'>Login</li>
        </ul>


      </nav>
    </div>
  );
}

export default NavBar;
