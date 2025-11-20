import React, { use } from 'react';
import { AuthContext } from '../provider/authContext';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
 <div className="bg-linear-to-b from-white to-blue-200 min-h-screen flex justify-center items-center px-6 py-10">
    <title>Profile</title>
      <div className="max-w-md w-full bg-white shadow-2xl shadow-blue-500 rounded-xl p-8 border border-blue-100 hover:scale-105 transition-transform duration-300">
        
         <h2 className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text font-banner text-transparent text-center text-4xl mb-6">
          Your Profile
        </h2>

         <div className="flex justify-center mb-6">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-md object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700">
          
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaUser className="text-blue-500 text-xl" />
            <p className="text-lg font-medium">{user.displayName || "No Name Available"}</p>
          </div>

          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
            <FaEnvelope className="text-purple-500 text-xl" />
            <p className="text-lg">{user.email || "No Email Available"}</p>
          </div>
        </div>
       </div>
    </div>   
  );
};

export default Profile;