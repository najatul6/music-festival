import { useContext } from "react";
import { AuthContext } from "../Shared/hook/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center">
            <span class="loading loading-bars loading-xs"></span>
            <span class="loading loading-bars loading-sm"></span>
            <span class="loading loading-bars loading-md"></span>
            <span class="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;