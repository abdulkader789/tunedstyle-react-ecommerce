import React from 'react';
import './Header.css'
import banner from "./banner.jpg"
const Header = () => {


  return (
    

<section  className='w-full relative  box-border'>
<div className="w-full">
    <div>
    <img className='w-full'src={banner} alt="img "/> 
    </div>
    <div className="absolute top-0">
        <p className="">SUMMER COLLECTION</p>
        <h2 className=''>FALL - WINTER<br/>Collection 2023</h2>
        <div className="">
            <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to exceptional quality.</p>
        </div>
        <button><a href="#sellers">SHOP NOW</a><i className=''></i></button>
        <div className="">
      
        </div>
    </div>
</div>
</section>



    );
};

export default Header;