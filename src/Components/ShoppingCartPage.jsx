import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Toaster } from "react-hot-toast";


const ShoppingCartPage = ({ setActiveTab }) => {
    return (


        <div className="h-screen flex justify-center items-center bg-gray-50">
            <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">

                <ShoppingCart size={88} className="text-rose-500 mx-auto mb-4" />

                <h2 className="text-xl font-bold text-rose-500 mb-2">
                    Your cart is empty
                </h2>

                <p className="text-[0.95rem] leading-relaxed text-slate-500 max-w-md mx-auto">
                    Looks like you have not added anything to your cart. Go ahead & explore top categories.
                </p>

                <button onClick={() => setActiveTab("model")}

                    className="mt-8 px-8 py-3 primary-btn text-white text-sm font-semibold rounded-full transition-colors">
                    Start Shopping
                </button>
                <Toaster position="top-right" reverseOrder={false} />

            </div>
        </div>
    );
};

export default ShoppingCartPage;