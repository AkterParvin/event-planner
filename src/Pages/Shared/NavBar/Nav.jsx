// import { useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Nav = () => {
    const { newUser, logOut } = useContext(AuthContext);
    

    // logout user function 
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out'))
            .catch(error => console.error(error))
    }
    
    // nav active show 
    const activeLink = ' text-blue-600 px-2  underline rounded-lg';
    const normalLink = "text-white";
    const navLinks = <>
        <li className="mb-2 text-lg font-bold hover:text-blue-700">
            <NavLink to="/" className={({isActive})=>isActive? activeLink:normalLink}>Home</NavLink>
        </li>
        <li className="mb-2 text-lg font-bold hover:text-blue-700">
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeLink : normalLink}>Blogs</NavLink>
        </li>
        <li className="mb-2 text-lg font-bold hover:text-blue-700">
            <NavLink to="/login" className={({ isActive }) => isActive ? activeLink : normalLink}>Login</NavLink>
        </li>
        <li className="text-lg mb-2  font-bold hover:text-blue-700">
            <NavLink to="/register" className={({ isActive }) => isActive ? activeLink : normalLink}>Register</NavLink>
        </li>
        <li className="text-lg mb-2  font-bold hover:text-blue-700">
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : normalLink}>Contact </NavLink>
        </li>
        <li>
            

        </li>
    </>

    
    
    return (
       
        // <nav className="flex  items-center justify-between  pr-7 md:px-8 lg:px-14">
        //     <div>
        //         <Link to='/'> <img src="/logo.png" alt="" className="w-48 h-48 " />
        //         </Link>
        //     </div>
        //     {/* <div>
        //         <ul className="hidden md:flex  py-6 gap-4 lg:gap-12 items-center ">
        //             {navLinks}
        //         </ul>
        //     </div> */}
        //     <div className=" drawer-end">
        //         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content">
        //             {/* Page content here */}
        //             <label htmlFor="my-drawer-4" className="drawer-button  "><AiOutlineMenu className="text-white font-bold text-2xl"></AiOutlineMenu></label>
        //         </div>
        //         <div className="z-50 drawer-side">
        //             <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        //             <ul className="menu pl-5 py-4 w-[70%] md:w-[50%] lg:w-[30%] min-h-full  bg-cyan-300/70 text-base-content">
        //                 {/* Sidebar content here */}
        //                 {navLinks}
        //             </ul>
        //         </div>
        //     </div>

             
        // </nav>
        <nav>
            <div className="navbar bg-transparent my-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Link to='/'>
                            <img src="https://shiloh-events.com/wp-content/uploads/2021/09/Shiloh_logo_horizontal_color.svg" alt="" className="h-12"/>
                        </Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        newUser ? <>{newUser.photoURL}<button className="bg-cyan-800 hover:bg-violet-300 font-bold btn btn-sm text-white text-sm" onClick={handleLogOut}>Sign Out</button >
                        </> :
                            <>
                                <Link to="/login"><button className="btn btn-sm">Login</button></Link>

                            </>
                    }
                </div>
            </div>
        </nav>
        
    );
};

export default Nav;