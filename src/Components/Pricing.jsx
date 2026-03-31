import React from 'react';

const Pricing = () => {
    return (
        <>

            <section className="py-20 bg-gray-100 text-center">

                <h2 className="text-4xl font-bold text-gray-800">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 mt-3 mb-12">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

                    <div className="bg-gray-50 p-8 rounded-2xl shadow text-left border">
                        <h3 className="text-xl font-semibold text-gray-800">Starter</h3>
                        <p className="text-gray-500 text-sm mb-4">Perfect for getting started</p>

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            $0 <span className="text-base font-medium text-gray-500">/Month</span>
                        </h2>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✔ Access to 10 free tools</li>
                            <li>✔ Basic templates</li>
                            <li>✔ Community support</li>
                            <li>✔ 1 project per month</li>
                        </ul>

                        <button className="w-full py-3 rounded-full primary-btn text-white font-medium md:mt-19">
                            Get Started Free
                        </button>
                    </div>

                    <div className="relative p-8 rounded-2xl shadow text-left text-white 
              primary-btn">

                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 
                   bg-yellow-300 text-xs px-4 py-1 rounded-full text-black">
                            Most Popular
                        </span>

                        <h3 className="text-xl font-semibold">Pro</h3>
                        <p className="text-sm opacity-90 mb-4">Best for professionals</p>

                        <h2 className="text-4xl font-bold mb-6">
                            $29 <span className="text-base font-medium opacity-80">/Month</span>
                        </h2>

                        <ul className="space-y-3 mb-8">
                            <li>✔ Access to all premium tools</li>
                            <li>✔ Unlimited templates</li>
                            <li>✔ Priority support</li>
                            <li>✔ Unlimited projects</li>
                            <li>✔ Cloud sync</li>
                            <li>✔ Advanced analytics</li>
                        </ul>

                        <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow text-left border">
                        <h3 className="text-xl font-semibold text-gray-800">Enterprise</h3>
                        <p className="text-gray-500 text-sm mb-4">For teams and businesses</p>

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            $99 <span className="text-base font-medium text-gray-500">/Month</span>
                        </h2>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✔ Everything in Pro</li>
                            <li>✔ Team collaboration</li>
                            <li>✔ Custom integrations</li>
                            <li>✔ Dedicated support</li>
                            <li>✔ SLA guarantee</li>
                            <li>✔ Custom branding</li>
                        </ul>

                        <button className="w-full py-3 rounded-full primary-btn text-white font-medium">
                            Contact Sales
                        </button>
                    </div>

                </div>

            </section>

            <section className="py-16 text-center bg-gradient-to-r from-blue-900 to-purple-600 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
                <p className="mb-6">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today..</p>

                <div className="flex justify-center gap-4">
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-full">Explore Products</button>
                    <button className="border border-white px-6 py-2 rounded-full">View Pricing</button>
                </div>
                <p className='mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
            </section>
        </>
    );
};

export default Pricing;