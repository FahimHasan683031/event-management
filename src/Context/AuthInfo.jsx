import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";


export const authContext = createContext(null);
const AuthInfo = ({children}) => {
   const [user, setUser]=useState();
   const [loading, setLoading]=useState(true);
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

    
   const createUser = (email, password)=>{
    setLoading(true)
    return (createUserWithEmailAndPassword(auth,email,password))
   }
   const signIn =(email, password)=>{
    setLoading(true)
    return (signInWithEmailAndPassword(auth,email,password))
   }
   const signoutu = ()=>{
    setLoading(true)
    return signOut(auth)
   }

//    signIn with google
const googleSignIn = ()=>{
    setLoading(true)
    return(signInWithPopup(auth,googleProvider))
}
//    signIn with google
const githubSignIn = ()=>{
    setLoading(true)
    return(signInWithPopup(auth,githubProvider))
}

// manage user
useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        setUser(user)
        setLoading(false)
    })
},[])

   const authDetail = {
    user,
    createUser,
    signIn,
    signoutu,
    googleSignIn,
    githubSignIn,
    loading
   } 
    return (
        <div>
            <authContext.Provider value={authDetail}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthInfo;