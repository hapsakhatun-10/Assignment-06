import React, { useState } from 'react';

import { Toaster, toast } from 'react-hot-toast';

const ProductCart = ({ product, carts, setCarts }) => {


    const [isBuy, setIsBuy] = useState(false)
    // Buy Button Function

    const handleBuyBtn = () => {
        setIsBuy(true)
        setCarts([...carts, product])
        toast.success("Added to Cart!");

    }



    return (

        <div className="bg-white rounded-2xl shadow-lg p-6 w-full sm:w-80 md:w-80 relative flex flex-col mx-auto">
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                {product.tag}
            </span>

            {/* Icon / Image */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 flex items-center justify-center rounded-full mb-4 text-2xl sm:text-3xl">
                jjjjjjj
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h2>

            <p className="text-gray-500 text-sm sm:text-base mb-4">{product.description}</p>

            <div className="mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-500 text-sm ml-1">/{product.period}</span>
            </div>

            <ul className="space-y-2 mb-6 text-sm sm:text-base text-gray-600">
                {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✔</span> {feature}
                    </li>
                ))}
            </ul>

            <button
                onClick={handleBuyBtn}
                className="w-full py-3 rounded-full text-white font-medium 
               bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
            >
                {isBuy ? "Added to Cart" : "Buy Now"}
            </button>
        </div>

    );
};

export default ProductCart;