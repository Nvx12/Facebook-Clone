import React from 'react';

const LeftSidebar = () => {
    return (
        <div className="w-[22.5rem] h-auto mt-12 py-3">
            <ul className="w-full text-gray-600">
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="user"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Safsaf Mohamed Raslen</p>
                    </div>
                </li>
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="info"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Covid-19 Information Center</p>
                    </div>
                </li>
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="friends"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Friends</p>
                    </div>
                </li>
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="memories"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Memories</p>
                    </div>
                </li>
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="pages"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Pages</p>
                    </div>
                </li>
                <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
                    <div>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="groups"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Groups</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;