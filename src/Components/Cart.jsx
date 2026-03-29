import React from 'react';

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
                <p className='text-3xl text-gray-500'>Cart is Empty</p>
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