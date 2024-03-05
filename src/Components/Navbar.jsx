import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';



const Navbar = () => {

    const location = useLocation();
    const pathName = location?.pathname.split('/')[1];
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        setShowDropdown(false);
    };

    return (
        <div className="w-full h-14 bg-white grid grid-cols-7 gap-4 fixed z-50">
            <div className="col-span-2 flex items-center">
                <div className="flex items-center ml-2">
                    <div className="h-10 text-primary">
                        <Link to="/">
                            <i className="fab fa-facebook" style={{ fontSize: 40 }}></i>
                        </Link>
                    </div>
                    <div className="h-10">
                        <input
                            placeholder="Search Facebook"
                            className="bg-gray-100 rounded-full h-full focus:outline-none ml-2 px-3 pr-4"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-3 flex items-center justify-center space-x-2">
                <Link to="/">
                    <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
                        <div className="w-14 h-auto relative flex items-center justify-center">
                            <div
                                className={`${pathName === '' || undefined
                                    ? 'text-primary'
                                    : 'text-gray-400'
                                    }`}
                            >
                                <i className="text-2xl fas fa-home"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/watch">
                    <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
                        <div className="w-14 h-auto relative flex items-center justify-center">
                            <div className="absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                                9+
                            </div>
                            <div
                                className={`${pathName === 'watch' ? 'text-primary' : 'text-gray-400'
                                    }`}
                            >
                                <i className="text-2xl fas fa-tv"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/marketplace">
                    <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
                        <div className="w-14 h-auto relative flex items-center justify-center">
                            <div className="hidden absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                                9+
                            </div>
                            <div
                                className={`${pathName === 'marketplace' ? 'text-primary' : 'text-gray-400'
                                    }`}
                            >
                                <i className="text-2xl fas fa-store"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/groups">
                    <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
                        <div className="w-14 h-auto relative flex items-center justify-center">
                            <div className="absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                                2
                            </div>
                            <div
                                className={`${pathName === 'groups' ? 'text-primary' : 'text-gray-400'
                                    }`}
                            >
                                <i className="text-2xl fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/gaming">
                    <div className="w-24 h-12 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100">
                        <div className="w-14 h-auto relative flex items-center justify-center">
                            <div className="absolute bg-red-500 text-white text-xs font-bold px-1 rounded-lg top-0 right-0">
                                9+
                            </div>
                            <div
                                className={`${pathName === 'gaming' ? 'text-primary' : 'text-gray-400'
                                    }`}
                            >
                                <i className="text-2xl fas fa-gamepad"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-2 flex items-center justify-end">
                <div className="h-10 w-auto flex items-center space-x-2 pr-2">
                    <Link to="/profile">
                        <button className="h-10 px-2 flex space-x-1 items-center justify-center focus:outline-none hover:bg-gray-300 rounded-full">
                            <div className="h-8">
                                <img
                                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                                    className="w-8 h-8 rounded-full"
                                    alt="dp"
                                />
                            </div>
                            <div className="h-8 flex items-center justify-content">
                                <p className="font-semibold text-sm">Raslen</p>
                            </div>
                        </button>
                    </Link>
                    <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
                        <i className="fas fa-plus"></i>
                    </button>
                    <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
                        <i className="fab fa-facebook-messenger"></i>
                    </button>
                    <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full">
                        <i className="fas fa-bell"></i>
                    </button>
                    <button className="w-10 h-10 bg-gray-200 focus:outline-none hover:bg-gray-300 rounded-full" onClick={() => setShowDropdown(!showDropdown)}>
                        <i className="fas fa-sort-down"></i>
                    </button>
                    {showDropdown && (
                        <div className="absolute mt-12 right-0 bg-white shadow-md rounded-md overflow-hidden">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={logout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;

