import React from 'react';

const RightSidebar = () => {


    return (
        <div className="w-[22.5rem] h-auto mt-12 py-3 pr-2">
            <div className="w-full text-gray-600 border-b-2 pb-2 mb-2 border-gray-300">
                <p className="font-semibold mb-2">Your Pages</p>
                <li className="h-12 mb-2 flex items-center -ml-3 justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                            alt="user"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Littlebit Programmer</p>
                    </div>
                </li>
                <ul className="text-gray-500 text-sm">
                    <li className="h-8 mb-2 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
                        <div>
                            <i className="fas fa-bell"></i>
                        </div>
                        <div>
                            <p className="text-xs">Notification</p>
                        </div>
                    </li>
                    <li className="h-8 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200">
                        <div>
                            <i className="fas fa-bullhorn"></i>
                        </div>
                        <div>
                            <p className="text-xs">Create promotion</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-600">
                    <div>
                        <p className="text-sm font-semibold">Contacts</p>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500">
                        <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
                            <i className="fab fa-youtube"></i>
                        </button>
                        <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="w-8 h-8 focus:outline-none rounded-full hover:bg-gray-200">
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>
                <div className="-ml-2">
                    <ul className="w-full text-gray-600">
                        {Array(6)
                            .fill(0)
                            .map((_, idx) => (
                                <li
                                    key={idx}
                                    className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200"
                                >
                                    <div>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8fDA%3D"
                                            alt="user"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Safaf Mohamed Raslen</p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;