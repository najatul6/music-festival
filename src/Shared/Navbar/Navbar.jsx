import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../hook/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(
                Swal.fire({
                    icon: 'success',
                    title: 'Well Done',
                    text: 'Log Out Successful',
                })
            )
    }

    const links = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
            <NavLink to='/gallery'>Gallery</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-50 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-white btn-ghost normal-case text-xl">
                    <img src="/musiclogo.svg" className="w-[200px]" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-4 items-center">
                            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://indianostrum.org/wp-content/uploads/2022/11/person-avator.png" alt="Bordered avatar"/>
                            <button onClick={handleLogOut} className="btn bg-[#7c60ff] text-white">Log Out</button>
                        </div>
                        :
                        <Link to='/login'><button className="btn bg-[#7c60ff] text-white">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;