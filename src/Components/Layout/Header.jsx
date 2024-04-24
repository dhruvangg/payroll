import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Transition } from '@headlessui/react';

export default function Header() {

    const menu = [{
        label: 'Employees',
        url: '/employees'
    }, {
        label: 'Timesheets',
        url: '/timesheets'
    }]

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-gray-600 body-font bg-gray-50 border-b relative">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Payroll</span>
                </Link>
                <button className="absolute right-5 top-0 h-full" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute top-full left-0 w-full bg-white">
                        <div className="p-4">
                            <ul>
                                {menu.map(el => <li key={el.url} className="mb-2"><NavLink key={el.url} className='hover:text-gray-400' to={el.url}>{el.label}</NavLink></li>)}
                            </ul>
                        </div>
                    </div>
                </Transition>
                <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center">
                    {menu.map(el => <NavLink key={el.url} className={({ isActive }) => isActive ? 'mr-5 text-indigo-700' : 'mr-5'} to={el.url}>{el.label}</NavLink>)}
                </nav>
                <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Account
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}