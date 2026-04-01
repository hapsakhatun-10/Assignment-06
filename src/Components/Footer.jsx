import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="bg-linear-to-r from-[#0b1a33] to-[#0d1f3f] text-gray-300 py-12">
                <div className="container mx-auto mt-20 ">

                    <div className="grid md:grid-cols-6 gap-10">

                        <div className="md:col-span-2">
                            <h2 className="text-white text-3xl font-bold mb-3">DigiTools</h2>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                                Premium digital tools for creators, professionals, and businesses.
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Features</li>
                                <li className="hover:text-white cursor-pointer">Pricing</li>
                                <li className="hover:text-white cursor-pointer">Templates</li>
                                <li className="hover:text-white cursor-pointer">Integrations</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Blog</li>
                                <li className="hover:text-white cursor-pointer">Careers</li>
                                <li className="hover:text-white cursor-pointer">Press</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white cursor-pointer">Documentation</li>
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                                <li className="hover:text-white cursor-pointer">Community</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Social Links</h4>
                            <div className="flex gap-3">

                                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>

                                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>

                                <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="border-t border-gray-700 mt-20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

                        <p>© 2026 Digitools. All rights reserved.</p>

                        <div className="flex gap-6 mt-4 md:mt-0">
                            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer">Terms of Service</span>
                            <span className="hover:text-white cursor-pointer">Cookies</span>
                        </div>

                    </div>

                </div>
            </footer>

            <script src="https://kit.fontawesome.com/your-kit-id.js" crossOrigin="anonymous"></script>
        </div>
    );
};

export default Footer;