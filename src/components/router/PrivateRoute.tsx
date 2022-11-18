import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export function PrivateRoute() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace={true} />;
}