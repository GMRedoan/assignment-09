import { Link, NavLink, useNavigate } from 'react-router';
import { FaAppStoreIos, FaHome } from 'react-icons/fa';
import { MdInstallMobile } from 'react-icons/md';
import logo from '../assets/logo.png'
import { use } from 'react';
import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const handleLogout = () => {
        logout().then(() => {
            Swal.fire({
                title: "You Logged Out Successfully",
                icon: "success",
                draggable: true
            });
        }).catch((error) => {
            console.log(error)
        });
        //  window.location.reload()
    }
    const navigate = useNavigate()
    return (
        <nav className="flex justify-between items-center  sticky top-0 z-10 bg-linear-to-t from-white to-blue-300 pt-3 px-7">
            <div className="flex py-3">
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
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/shop'><li>Shop</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/details'><li>Toy Details</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/blog'><li>Blog</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/contact'><li>Contact</li></NavLink>
                        </div>
                    </ul>
                </div>
                <Link to='/' className='flex '>
                    <img className='w-[78px]' src={logo} alt="" />
                    <p className="mt-2 md:mt-0 md:text-3xl font-black bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-logo">Toy Topia</p>
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 ">
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='/'><li>Home</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='/shop'><li>Shop</li></NavLink>
                    </div>
                     <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='/details'><li>Toy Details</li></NavLink>
                    </div>
                     <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='/blog'><li>Blog</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='/contact'><li>Contact</li></NavLink>
                    </div>

                </ul>
            </nav>
            {
                user ?
                    (
                        <div className='flex items-center gap-4'>
                            <img className='w-[42px] h-[42px] rounded-full' src={user.photoURL} alt=""
                                title={user.displayName} />
                            <p onClick={handleLogout} className="btn bg-linear-to-r from-red-500 to-yellow-500 text-white font-bold border-0 hover:text-black">Logout</p>
                        </div>
                    )

                    :

                    (
                        <p onClick={() => navigate('/login')} className="btn bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold border-0 hover:text-yellow-300">Login</p>
                    )
            }
        </nav>
    );
};

export default Navbar;