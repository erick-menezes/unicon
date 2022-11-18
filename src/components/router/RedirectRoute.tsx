import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export function RedirectRoute() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Navigate to="/home" replace={true} /> : <Outlet />;
}