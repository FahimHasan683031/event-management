import { useContext } from "react";
import { authContext } from "../Context/AuthInfo";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location = useLocation()
    if (loading){
        return (<div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner text-orange-500  w-12"></span></div>)
    }
    if(user){
        return children
    }

  return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default Privet;