import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

const Cart = ({ carts = [], setCarts }) => {

    const handlePaymentbtn = () => {
        setCarts([]);
        toast.success("Paid Successfully!", {
            position: "top-center",
            style: {
                background: "green",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
            },
            // duration: 2,
        });
    };

    const handleRemove = (id) => {
        setCarts(prev => prev.filter(cart => cart.id !== id));
        toast.success("REMOVE SUCCESSFULLY", {
            style: {
                background: "red",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
            },
            position: "top-center",


        });
    };

    const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);

    if (carts.length === 0) {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-white text-center">
                <ShoppingCart size={88} className="text-rose-700 mb-4" />
                <h2 className="text-xl font-bold text-rose-700 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 max-w-md">
                    Looks like you have not added anything to your cart. Explore top products and add them to your cart.
                </p>

            </div>
        );
    }

    return (
        <div className="p-6 text-2xl font-bold ">Your Shopping Cart:
            {carts.map(cart => (


                <div key={cart.id} className="flex gap-5 justify-between items-center mb-4 p-4 bg-white rounded shadow">
                    <div className="flex gap-5 items-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                            <img src={cart.image} alt="" />
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

            <div className=" border shadow-gray-300 flex justify-between px-6 py-4 font-bold text-2xl rounded mt-4">
                <span>Total</span>
                <span className="text-2xl">${totalPrice}</span>
            </div>


            <button

                onClick={handlePaymentbtn}
                className="mt-4 w-full py-3 bg-linear-to-r from-blue-800 to-purple-600 text-white font-bold rounded hover:opacity-90 transition"
            >

                Proceed to Checkout
            </button>
            <Toaster position="top-right" reverseOrder={false} />

        </div >
    );
};

export default Cart;
