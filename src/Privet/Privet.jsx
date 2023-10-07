import { useContext } from "react";
import { authContext } from "../Context/AuthInfo";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({children}) => {
    const {user}=useContext(authContext)
    const location = useLocation()
    if(user){
        return children
    }

  return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default Privet;