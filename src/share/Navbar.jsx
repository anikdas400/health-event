import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/pngtree-home-healthcare-logo-and-icon-design-image_148414.jpg"


const Navbar = () => {
    const{user,logOut}=useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(()=>{console.log("logout successfully")})
        .catch(error=>{
            console.error(error);
        })
    }

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <img className="h-24 w-24" src={logo} alt="" />
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">

                <img className="w-12 h-12 rounded-full mr-3" src="https://i.ibb.co/VTPzn98/6128-Anik.jpg" alt="" />
                {
                    user ? <>
                    <span className="mr-2">{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-primary">LogOut</button>
                    </>:
                    <Link to="/login"><button className="btn btn-primary">Login</button></Link> 
                }
                
            </div>
        </div>
    );
};

export default Navbar;