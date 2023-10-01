import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const barsRef = useRef(null); // Define the barsRef

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarClicked = sidebarRef.current && sidebarRef.current.contains(event.target);
      const barsClicked = barsRef.current && barsRef.current.contains(event.target);

      if (!sidebarClicked && !barsClicked) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);




  return (
    <main className='relative w-full'>
      <div className="">
        <div className="w-full flex">
          <div ref={barsRef}
            className="cursor-pointer w-20" onClick={toggleSidebar}>
            <FontAwesomeIcon className='text-black' icon={faBars} />
          </div>
          <h1 className='w-full text-xl  text-black'>TunedStyle</h1>
          < FontAwesomeIcon className='text-black m-auto w-20' icon={faSearch} />

        </div>

        <section ref={sidebarRef} className={`sidebar z-10 bg-gray-100 ${isSidebarOpen ? 'open' : ''}`}>

          <div className="search-bar w-full relative sm:pl-5 sm:flex sm:justify-center mb-5">
            <input className='w-full relative sm:w-[400px] lg:w-[600px]  h-0 text-sm text-black  py-4' type="text" placeholder="Search Products" />
            <button type="button" className='sm:relative sm:right-12 absolute right-2'> <FontAwesomeIcon className='faSearch' icon={faSearch} /></button>
          </div>
          <ul className='flex flex-col justify-around uppercase nav-scale'>
            <li className='bg-black mb-2 py-1'>
              <a href='/shop'>Men</a>
            </li>
            <li className='bg-black mb-2 py-1'>
              <a href='/order'>women</a>
            </li>
            <li className='bg-black mb-2 py-1'>
              <a href='/inventory'>kids</a>
            </li>
            <li className='bg-black mb-2 py-1'>
              <a href='/login'>all</a>
            </li>

          </ul>
          <div className=' cursor-pointer text-black w-full sm:w-48 sm:flex justify-around items-center'>
            <button>Register</button>
            <button className='button-59 w-full md:mx-3'>Login</button>
          </div>
        </section>
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
