import { Navigate } from "react-router-dom";
import { getUser } from "../services/authService";

function RoleRoute({ children, allowedRoles }) {

    const user = getUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}

export default RoleRoute;