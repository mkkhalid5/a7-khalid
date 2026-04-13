
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { IoMdHome, IoMdStats } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';

const NavBar = () => {

    const links = (
        <>
            <li><NavLink to="/"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoMdHome /> Home
            </NavLink>
            </li>
            <li><NavLink to="/timeline"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoTimeOutline />TimeLine
            </NavLink>
            </li>
            <li><NavLink to="/stats"
                className={({ isActive }) =>
                    `font-semibold 
                    ${isActive ? "bg-[#244D3F] text-white" : ""}`}><IoMdStats />Stats
            </NavLink>
            </li>
        </>
    )
    return (
        <div className='shadow-sm'>
            <div className='py-4 flex justify-between container mx-auto'>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex'>
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;