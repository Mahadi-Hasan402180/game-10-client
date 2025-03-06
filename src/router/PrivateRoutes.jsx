
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loding from "../pages/Loding";

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    

    if(loading){
        return <Loding></Loding>
    }


    if(user && user?.email){
        return children
    }
    return (
        <Navigate  state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoutes;
