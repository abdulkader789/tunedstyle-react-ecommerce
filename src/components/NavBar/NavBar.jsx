import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const barsRef = useRef(null);
  const searchRef = useRef(null); // Define the searchRef

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarClicked = sidebarRef.current && sidebarRef.current.contains(event.target);
      const barsClicked = barsRef.current && barsRef.current.contains(event.target);
      const searchClicked = searchRef.current && searchRef.current.contains(event.target);

      if (!sidebarClicked && !barsClicked && !searchClicked) {
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
      <div className="w-full flex items-center justify-center">
        <div ref={barsRef} onClick={toggleSidebar} className="cursor-pointer md:hidden w-20">
          <FontAwesomeIcon className='text-black' icon={faBars} />
        </div>
        <h1 className='w-full md:w-60 text-xl text-black'>TunedStyle</h1>
        <div ref={searchRef} onClick={toggleSidebar}
          className='justify-center md:hidden w-20 flex items-center cursor-pointer'>
          <FontAwesomeIcon className='text-black ' icon={faSearch} />
        </div>
        <div className=" w-full lg:w-[600px] relative  my-5 hidden md:block">
          <input className='w-full relative h-0 text-sm text-black  py-4' type="text" placeholder="Search Products" />
          <button type="button" className='absolute right-1 top-2'>
            <FontAwesomeIcon className='faSearch' icon={faSearch} />
          </button>
        </div>
        <div className=' hidden cursor-pointer text-black w-[300px] md:flex flex-row'>
          <button className='w-1/2'>Sign-up</button>
          <button className='button-59 bg-slate-950 text-white w-1/2  md:mx-3 my-3'>Login</button>
        </div>

      </div>

      <section ref={sidebarRef} className={`md:relative md:-left-0 md:top-auto md:h-auto
        md:flex-row md:w-full
        transition-left duration-300 top-0 ease-in-out h-screen w-[300px] absolute -left-[300px] z-10  bg-gray-50 
        ${isSidebarOpen ? '-left-0' : ''}`}>

        <div className=" w-full relative  my-5 md:hidden">
          <input className='w-full relative h-0 text-sm text-black  py-4' type="text" placeholder="Search Products" />
          <button type="button" className='absolute right-1 top-2'>
            <FontAwesomeIcon className='faSearch' icon={faSearch} />
          </button>
        </div>
        <ul className='flex flex-col justify-around uppercase text-black  md:flex-row md:w-[600px] md:mx-auto'>
          <li className=' mb-2 py-1'>
            <a href='/shop'>Men</a>
          </li>
          <li className='mb-2 py-1'>
            <a href='/order'>women</a>
          </li>
          <li className='mb-2 py-1'>
            <a href='/inventory'>kids</a>
          </li>
          <li className='mb-2 py-1'>
            <a href='/login'>all</a>
          </li>
        </ul>
        <div className='flex-col cursor-pointer text-black w-full flex justify-around items-center md:hidden'>
          <button className=''>Sign-up</button>
          <button className='button-59 bg-slate-950 text-white w-full md:mx-3 my-3'>Login</button>
        </div>
      </section>
    </main>
  );
}

export default NavBar;
