import React from 'react';
import './Header.css'
import banner from "./banner.jpg"
const Header = () => {


    return (


        <section className='w-full relative h-60 sm:h-[91vh]'>

            <img alt='' src='
https://www.shannonspringshotel.com/wp-content/uploads/2020/06/shopping-shannon-springs-2.jpg            '
                className='h-full w-full'></img>
            <div className='absolute top-5 text-left  p-4 sm:top-10 sm:left-10 md:top-24 md:left-24 lg:top-36'>
                <p className='capitalize text-xs sm:text-xl mb-1 sm:mb-2 md:mb-4'>Taking Your Viewing experience to next level</p>
                <h1 className='capitalize text-sm font-bold md:mb-4 text-slate-800 sm:text-4xl mb-2'>Unlock Your style</h1>
                <button className='uppercase text-xs sm:text-sm bg-pink-400 hover:bg-slate-200 hover:text-slate-900 text-white px-3 py-1 sm:px-5 sm:py-3'>shop now</button>
            </div>


        </section>



    );
};

export default Header;