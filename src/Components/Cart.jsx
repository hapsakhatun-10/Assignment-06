import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ carts = [], setCarts }) => {

    const handlePaymentbtn = () => {
        setCarts([]);
        // optionally add a toast here
    };

    const handleRemove = (id) => {
        setCarts(prevCarts => prevCarts.filter(cart => cart.id !== id));
    };

    const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);

    if (carts.length === 0) {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-white text-center">
                <ShoppingCart size={88} className="text-rose-500 mb-4" />
                <h2 className="text-xl font-bold text-rose-500 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 max-w-md">
                    Looks like you have not added anything to your cart. Explore top products and add them to your cart.
                </p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className='text-2xl font-bold mb-8'>Your Cart</h2>

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
                        onClick={() => handleRemove(cart.id)}
                        className="text-red-500 font-bold hover:text-red-700 transition"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className='bg-yellow-300 flex justify-between px-6 py-4 font-bold text-xl rounded mt-4'>
                <span>Total</span>
                <span>${totalPrice}</span>
            </div>

            <button
                onClick={handlePaymentbtn}
                className="mt-4 w-full py-3 bg-linear-to-r from-purple-400 to-pink-500 text-white font-bold rounded hover:opacity-90 transition"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;
