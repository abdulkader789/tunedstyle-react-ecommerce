import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='text-white bg-slate-950 py-3'>

            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full">
                    <h4>INFORMATION</h4>
                    <h1>Contact Us</h1>
                    <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</span>
                    <h3>USA</h3>
                    <p>195 E Parker Square Dr, Parker, CO 801<br />+43 982-314-0958</p>
                    <h3>India</h3>
                    <p>HW95+C9C, Lorem ipsum dolor sit.<br />411014</p>
                </div>
                <div className="w-full md:w-1/2 ">
                    <div className='text-black'>
                        <input className='w-full' type="text" placeholder="Name" required />
                        <input className='w-full' type="email" placeholder="Email" required />
                        <textarea className='w-full h-48' type='' placeholder="Message" required />

                    </div>
                    <button className='w-full hover:bg-slate-600 py-3 bg-black text-white'>SEND MESSAGE</button>
                </div>


            </div>

            {/* <footer className=''>

                <div className="">
                    <p>The customer is at the heart of our<br />unique business model, which includes<br />design.</p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                </div>
                <div className="">
                    <h4>SHOPPING</h4>
                    <a href="#sellers">Clothing Store</a>
                    <a href="#sellers">Trending Shoes</a>
                    <a href="#sellers">Accessories</a>
                    <a href="#sellers">Sale</a>
                </div>
                <div className="">
                    <h4>SHOPPING</h4>
                    <a href="./contact.html">Contact Us</a>
                    <a href="https://payment-method-sb.netlify.app/" target="_blank">Payment Method</a>
                    <a href="https://delivery-status-sb.netlify.app/" target="_blank">Delivery</a>
                    <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank">Return and Exchange</a>
                </div>
                <div className="">
                    <h4>NEWLETTER</h4>
                    <p>Be the first to know about new<br />arrivals, look books, sales & promos!</p>
                    <div className="">
                        <input type="email" placeholder="Your Email" />
                        <i className=''></i>
                    </div>
                    <hr />
                </div>


            </footer> */}
        </div>
    );
};

export default Contact;