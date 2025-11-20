import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/authContext';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    <title>Login</title>
    const { Login, user, googleLogin } = use(AuthContext)
    const [email, setEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const notify = (msg) => toast.error(msg);
    const [error, setError] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        setError('')
        Login(email, password)
            .then(() => {
                // console.log(result)
                Swal.fire({
                    title: "LogIn Successful. Welcome to Toy Topia 🎊",
                    icon: "success",
                    draggable: true
                });
                form.reset()
                navigate(location.state || "/")
            })
            .catch(() => {
                setError("Invalid Email or Password")
                notify("Invalid Email or Password")
            })
    }
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    title: "LogIn Successful. Welcome to Toy Topia 🎊",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                setError(error)
            })
    }
    return (
        <div className="hero bg-linear-to-b from-white to-blue-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{
                        user ? <p className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Welcome To → Toy Topia</p> : <p>Please LogIn Now!</p>
                    }</h1>
                    <p className="py-6 text-gray-500">
                        Enter your account to continue your ToyTopia adventure.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-blue-500 border border-blue-200">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label>Email</label>
                                <input type="email" className="input"
                                onChange={(e) => setEmail(e.target.value)}
                                    required
                                    name='email'
                                    placeholder="Email" />
                                {/* password */}
                                <label>Password</label>
                                <input type="password"
                                    name='password'
                                    className="input"
                                    required
                                    placeholder="Password" />
                                <div><Link to='/forgetPass'
                                state={email} 
                                className="link link-hover">Forgot password?</Link></div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <button type='submit'
                                    className="btn bg-linear-to-r from-blue-500 to-purple-600 mt-4 text-white 
                                font-semibold">Login Now</button>

                                <button
                                    type='button'
                                    onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                            <p className='pt-2'>Don't have any Account ! <Link to='/registration'><span className='text-blue-500 font-semibold hover:underline'>Registration</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
           <ToastContainer></ToastContainer> 
        </div>
    );
};

export default Login;