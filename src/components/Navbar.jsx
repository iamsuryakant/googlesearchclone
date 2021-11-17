import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className = "p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className = "flex justify-between items-center space-x-5 w-screen">
            <Link to = "/">

                <div  className = "w-20 h-auto  ">
                    <img src = "logo.png"  alt= "logo"/>
                </div>
                <p className = "bg-white-200 font-bold text-white py-1 px-2  dark:bg-white-500 dark:text-white-900">
                    
                </p>
            </Link>
            <button type = "button" onClick = {() => setDarkTheme(!darkTheme)} className ="text-xl dark:bg-white-50 dark:text-white-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                {darkTheme ? '💡' : '🌙'}
            </button>
            </div>
            <Search />
        </div>
    );
}
