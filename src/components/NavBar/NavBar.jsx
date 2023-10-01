import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <main>
      <div className="navbar sm:h-16  box-border flex flex-col sm:flex-row  sm:pb-0 justify-evenly items-center">

        <div className="logo flex w-full justify-between sm:w-48">
          <div className="mobile-icons w-16 border shadow-md sm:hidden">
            <FontAwesomeIcon className='text-black' icon={faBars} />
          </div>
          <h1 className='w-[40%] sm:w-[100%] px-2 text-black'>TunedStyle</h1>
          <div className='w-20 sm:hidden flex text-black justify-evenly items-center border shadow-md'>
            <FontAwesomeIcon className='' icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <button className='absolute right-1 top-1 bg-red-400 text-white text-xs px-1 rounded-sm'>0</button>

          </div>
        </div>

        <div className="search-bar w-full relative sm:pl-5 sm:flex sm:justify-center">
          <input className='w-full relative sm:w-[400px] lg:w-[600px]  h-0 text-sm text-black  py-4' type="text" placeholder="Search Products" />
          <button type="button" className='sm:relative sm:right-12 absolute right-2'> <FontAwesomeIcon className='faSearch' icon={faSearch} /></button>
        </div>
        <div className='hidden cursor-pointer text-black w-20 sm:w-48 sm:flex justify-around items-center'>
          <button>Register</button>
          <button className='button-59 w-full mx-3'>Login</button>
        </div>
      </div>


      <nav className="w-full py-5">

        <ul className='flex justify-around uppercase w-[50%] mx-auto'>
          <li>
            <a href='/shop'>Men</a>
          </li>
          <li>
            <a href='/order'>women</a>
          </li>
          <li>
            <a href='/inventory'>kids</a>
          </li>
          <li>
            <a href='/login'>all</a>
          </li>

        </ul>

      </nav>
    </main>
  );
}

export default NavBar;
