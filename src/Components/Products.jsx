import React, { use } from 'react';
import ProductCart from './ProductCart';





const Products = ({ productsPromise }) => {

    const products = use(productsPromise)


    return (
        <div className=" flex flex-col justify-center items-center px-4">

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
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab px-10 py-2 text-xl rounded-full font-bold"
                    aria-label="Cart (0)"
                />
            </div>

            {/* CARTS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {products.map((product) => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>


        </div >

    );
};

export default Products;