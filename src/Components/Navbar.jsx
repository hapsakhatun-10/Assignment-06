import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between items-center px-6 py-3 bg-white">
                <div className="navbar-start flex items-center gap-2 font-bold text-4xl ">

                    DigiTool
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn bg-red-500 rounded-full text-white px-4 py-2 hover:bg-red-600">Get in Touch</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;