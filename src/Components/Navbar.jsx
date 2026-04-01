import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartLength }) => {
    return (
        <div className='container mx-auto mb-10 px-4 md:px-8'>
            <div className="navbar flex justify-between items-center bg-white py-3">

                {/* Logo */}
                <div className="font-bold text-4xl primary-text bg-clip-text text-transparent">
                    DigiTool
                </div>

                {/* Menu - Only on medium and larger screens */}
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 text-lg">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Right section - Cart, Login, Button */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <ShoppingCart className='w-6 h-6' />
                        {cartLength > 0 && (
                            <div className="absolute -top-1 right-0 flex items-center justify-center w-4 h-4 rounded-full bg-rose-600 text-rose-50 text-xs">
                                {cartLength}
                            </div>
                        )}
                    </div>

                    {/* Only show login on medium screens and up */}
                    <p className="hidden md:block"><a href="#">Login</a></p>

                    <a className="primary-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600">
                        Get Started
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;