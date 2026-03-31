import React from 'react';

import { ShoppingCart } from 'lucide-react';
const Cart = ({ carts, setCarts }) => {


    const handlePaymentbtn = () => {
        setCarts([]);
    }

    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
        totalPrice += carts[i].price;
    }



    return (
        <div className="p-6">
            <h2 className='text-2xl font-bold mb-8'>Your Cart</h2>

            {carts.length === 0 ? (
                <div className="text-3xl text-gray-500 text-center">
                    <ShoppingCart size={88} className="text-rose-500 mx-auto mb-4" />

                    <h2 className="text-xl font-bold text-rose-500 mb-2">
                        Your cart is empty
                    </h2>

                    <p className="text-[0.95rem] leading-relaxed text-slate-500 max-w-md mx-auto">
                        Looks like you have not added anything to your cart. Go ahead & explore top categories.
                    </p>

                    <button className="mt-8 px-8 py-3 primary-btn text-white text-sm font-semibold rounded-full  transition-colors">
                        Start Shopping
                    </button>
                </div>
            ) : (
                <>
                    {carts.map(cart => (
                        <div key={cart.id} className='flex gap-5 justify-between items-center mb-4 p-4 bg-white rounded shadow'>
                            <div className='flex gap-5 items-center'>
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                                    🛒
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{cart.name}</h2>
                                    <p className="text-gray-900 text-lg">${cart.price}</p>
                                </div>
                            </div>

                            <button
                                className="text-red-500 font-bold"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total */}
                    <div className='bg-yellow-300 flex justify-between px-6 py-4 font-bold text-xl rounded mt-4'>
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>

                    {/* Checkout button */}
                    <button
                        onClick={() => handlePaymentbtn(carts)}
                        className="mt-4 w-full py-3 bg-purple-400 text-white font-bold rounded"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}

        </div>
    );
};

export default Cart;