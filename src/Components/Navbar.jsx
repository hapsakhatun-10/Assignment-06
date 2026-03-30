import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ cartLength }) => {
    return (
        <div className='container mx-auto mb-10'>
            <div className="navbar flex justify-between items-center  bg-white">
                <div className="navbar-start flex items-center gap-2 font-bold text-4xl bg-gradient-to-l from-blue-800 to-purple-400 bg-clip-text text-transparent">
                    DigiTool
                </div>


                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative">
                        <ShoppingCart className='size-6 mr-2' />
                        {cartLength > 0 && <div className="flex items-center justify-center w-4 h-4 rounded-full bg-rose-600 text-rose-50 -top-1 right-0 absolute text-xs">{cartLength}</div>}
                    </div>
                    <p className='mx-3'><a href="#">Login</a></p>

                    <a className="primary-btn">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;