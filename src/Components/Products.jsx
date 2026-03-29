import React, { use } from 'react';
import ProductCart from './ProductCart';





const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise)


    return (
        <div className=" flex flex-col justify-center items-center px-4">
            {/* CARTS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {products.map((product) => (
                    <ProductCart key={product.id} product={product} carts={carts}
                        setCarts={setCarts} />
                ))}
            </div>


        </div >

    );
};

export default Products;