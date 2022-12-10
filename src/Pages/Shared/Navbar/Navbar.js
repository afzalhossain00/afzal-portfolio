import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><Link className='text-lg font-semibold rounded-lg' to='/'>Home</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/project'>Project</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/Skill'>Skill</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/contact'>Contact</Link></li>
        <li><Link className='text-lg font-semibold rounded-lg' to='/about'>About</Link></li>
        <li className='flex justify-center items-center'>
            <a href='https://drive.google.com/file/d/1tddW9kEy0CCEEq7mxXqdtHgin-QBa0AT/view' target='blank' alt='resume' class="btn btn-sm btn-primary text-black rounded-md py-2 font-bold">Resume</a>
        </li>
    </React.Fragment >

    return (
        <div className="navbar bg-base-100 flex justify-between mb-4 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to="/" className="font-bold normal-case text-3xl text-primary">Afzal Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;