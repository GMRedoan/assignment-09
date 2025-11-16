import { Link, NavLink, useNavigate } from 'react-router';
import { GrGithub } from "react-icons/gr";
import { FaAppStoreIos, FaHome } from 'react-icons/fa';
import { MdInstallMobile } from 'react-icons/md';
import logo from '../assets/logo.png'
import { CgProfile } from 'react-icons/cg';


const Navbar = () => {
    const navigate = useNavigate()
     return (
        <nav className="navbar sticky top-0 z-10 bg-linear-to-t from-white to-blue-300 pt-4">
            <div className="navbar-start ml-7">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        <div className='flex items-center gap-1'>
                            <FaHome></FaHome>
                            <NavLink to='/'><li>Home</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaAppStoreIos />
                            <NavLink to='/apps'><li>Apps</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdInstallMobile />
                            <NavLink to='/installation'><li>Installation</li></NavLink>
                        </div>
                    </ul>
                </div>
                <Link to='/' className='flex'>
                    <img className='w-[78px] mr-2' src={logo} alt="" />
                    <p className="text-3xl font-black bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-logo">Toy Topia</p>
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 ">
                    <div className='flex items-center gap-1'><FaHome></FaHome>
                        <NavLink to='/'><li>Home</li></NavLink>
                    </div>
                    {/* <div className='flex items-center gap-1'>
                        <FaAppStoreIos />
                        <NavLink to='/apps'><li>Apps</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdInstallMobile />
                        <NavLink to='/installation'><li>Installation</li></NavLink> */}

                    {/* </div> */}
                </ul>
            </nav>
            <div className="navbar-end mr-7">
                <p onClick={()=>navigate('/login')} className="btn bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold border-0"><CgProfile></CgProfile> My Profile</p>
            </div>
        </nav>
    );
};

export default Navbar;