import React, { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
 
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    //    sign in 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }
    
    // log in
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    // log out
    const logout = () => {
        return signOut(auth)
    }

    // sign in with google
    const googleProvider = new GoogleAuthProvider()
            const googleLogin = () => {
             return signInWithPopup(auth, googleProvider)
            }

  const [user, setUser] = useState(null)
  
    //   preserve the user
  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (CurrentUser)=>{
        setUser(CurrentUser)
    })
    return () =>{
        unsubscribe()
    } 
  },[])

   // show info
   const updateUserProfile = (profile) => {

    return updateProfile(auth.currentUser, profile)
        .then(() => {
            setUser({
                ...auth.currentUser,
                ...profile
            })
        })
    }   

   //   passing data
const authData = {
   user,
   setUser,
   createUser,
   Login,
   logout,
   googleLogin,
   updateUserProfile
}

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;