import { Rocket, User, Package } from 'lucide-react';

const Steps = () => {
    return (

        <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
            <p className="text-gray-500 mb-10">
                Start using premium digital tools in minutes, not hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 px-6 items-center max-w-6xl mx-auto">

                {/* Step 1 */}
                <div className="bg-white p-6 rounded-xl shadow relative flex flex-col items-center text-center">
                    <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        01
                    </span>
                    <User className="text-purple-500 text-4xl mb-4" />
                    <h3 className="font-semibold text-lg">Create Account</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-xl shadow relative flex flex-col items-center text-center">
                    <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        02
                    </span>
                    <Package className="text-purple-500 text-4xl mb-4" />
                    <h3 className="font-semibold text-lg">Choose Products</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-xl shadow relative flex flex-col items-center text-center">
                    <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        03
                    </span>
                    <Rocket className="text-purple-500 text-4xl mb-4" />
                    <h3 className="font-semibold text-lg">Start Creating</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>
        </section>


    );
};

export default Steps;