import React from 'react';

const Footer = () => {
    function onclick() {
        alert('8 901 701 94-27')
    }

    return (
        <div className='bottom-0 top-auto w-[100%] my-2 px-2 flex flex-col relative'>
        <footer className="bg-white rounded-lg shadow dark:bg-gray-800 w-full">
            <div className="mx-auto p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 pl-4">© 2023
          <a href="https://maddysonshow.github.io/VladiK/" target={"_blank"} className="hover:underline px-4">EtoZheVladik inc.™</a>. All Rights Right.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li onClick={onclick} className='hover:cursor-pointer'>
                        <a className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
        </div>
    );
};

export default Footer;