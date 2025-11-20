import { useContext, useRef } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { AuthContext } from '../provider/authContext';
import { toast, ToastContainer } from 'react-toastify';

const ForgetPass = () => {
    const {resetPass} = useContext(AuthContext)
    const notify = () => toast.info("Please check your email!")
    const location = useLocation()
    const defaultEmail = location.state || ""
    const emailRef = useRef()
    const handleResetPass = (e) => {
        const email = emailRef.current.value
        e.preventDefault()
        resetPass(email)
        .then(() => {
            notify()
         })
        .catch((error) => {
            console.log(error)
    })
     }
    return (
   <section className="flex justify-center items-center bg-linear-to-b from-white to-blue-200 min-h-screen">
      <div className="container mx-auto px-4 max-w-md">

        <div className="card bg-base-100 shadow-2xl shadow-blue-500 p-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Reset Password
          </h2>

          <p className="text-center text-base-content/70 mb-6">
            Enter your email address and we will send you instructions to reset your password.
          </p>

          <form onSubmit={handleResetPass} className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-primary" />
                <input
                  type="email"
                  ref={emailRef}
                  defaultValue={defaultEmail}
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            <button type='submit' className="btn btn-primary w-full text-lg">
              Reset Password
            </button>

          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>    
    );
};

export default ForgetPass;