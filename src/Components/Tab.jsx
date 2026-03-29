import React from 'react';

const Tab = ({ setActiveTab }) => {
    return (
        <div>

            <div className='text-center p-6 rounded-lg mb-6'>
                <p className='text-4xl font-bold mb-2'>Premium Digital Tools</p>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="tabs tabs-box flex justify-center gap-4">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab px-10 py-2 text-xl rounded-full font-bold"
                    aria-label="Products"
                    defaultChecked
                    onClick={() => setActiveTab("model")}
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab px-10 py-2 text-xl rounded-full font-bold"
                    aria-label="Cart ({cart.length})"
                    onClick={() => setActiveTab("cart")}

                />
            </div>
        </div>
    );
};

export default Tab;