
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { IoMdHome, IoMdStats } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';

const NavBar = () => {

    const links = (
        <>
            <li onClick={() => document.activeElement.blur()}><NavLink to="/"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoMdHome /> Home
            </NavLink>
            </li >
            <li onClick={() => document.activeElement.blur()}><NavLink to="/timeline"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoTimeOutline />TimeLine
            </NavLink>
            </li>
            <li onClick={() => document.activeElement.blur()}><NavLink to="/stats"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoMdStats />Stats
            </NavLink>
            </li>
        </>
    )
    return (
        <div className='border-b border-gray-300 px-3'>
            <div className='flex justify-between container mx-auto'>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className='navbar-center hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;