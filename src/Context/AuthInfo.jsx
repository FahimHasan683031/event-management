import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";


export const authContext = createContext(null);
const AuthInfo = ({children}) => {
   const [user, setUser]=useState();
    
   const createUser = (email, password)=>{
    return (createUserWithEmailAndPassword(auth,email,password))
   }
   const signIn =(email, password)=>{
    return (signInWithEmailAndPassword(auth,email,password))
   }

   const authDetail = {
    user,
    createUser,
    signIn,
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