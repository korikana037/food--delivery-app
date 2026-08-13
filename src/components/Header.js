import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_LOGO } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [buttonText, setButtonText] = useState('Login');

    const handleClick = () => {
        buttonText === 'Login'
            ? setButtonText('Logout')
            : setButtonText('Login');
    };

    const onlineStatus = useOnlineStatus();

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            className="w-32 md:w-36 object-contain hover:scale-105 transition-transform duration-200"
                            src={HEADER_LOGO}
                            alt="Food App Logo"
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-2 md:gap-6 text-gray-700 font-medium">

                        <li>
                            <Link
                                to="/"
                                className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-200"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/grocery"
                                className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-200"
                            >
                                Grocery
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-200"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-200"
                            >
                                Contact Us
                            </Link>
                        </li>

                        {/* Online Status */}
                        <li className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 text-sm">
                            <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                    onlineStatus
                                        ? 'bg-green-500'
                                        : 'bg-red-500'
                                }`}
                            ></span>

                            <span
                                className={
                                    onlineStatus
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }
                            >
                                {onlineStatus ? 'Online' : 'Offline'}
                            </span>
                        </li>

                        {/* Cart */}
                        <li>
                            <Link
                                to="/cart"
                                className="relative px-3 py-2 hover:text-orange-500 transition-colors duration-200"
                            >
                                🛒 Cart
                            </Link>
                        </li>

                        {/* Login / Logout */}
                        <li>
                            <button
                                onClick={handleClick}
                                className="ml-2 px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                {buttonText}
                            </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;