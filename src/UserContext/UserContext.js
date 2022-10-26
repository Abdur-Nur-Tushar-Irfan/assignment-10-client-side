import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();
const auth=getAuth(app)
const provider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState({displayName:'Tushar'})
    //for email and password
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    //for login

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //for google authentication

    const googleProvider=new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //for logout
    const logOut=()=>{
        return signOut(auth)
    }
    //update user profile and url

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    //for github authentication
    const signInWithitHub=()=>{
       return signInWithPopup(auth, provider)
    }


    

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
       return()=>{
        unsubscribe();
       }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,signInWithGoogle,
        logOut,
        loading,
        updateUserProfile,
        signInWithitHub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default UserContext;