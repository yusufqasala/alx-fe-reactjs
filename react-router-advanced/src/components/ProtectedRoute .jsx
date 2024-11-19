import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        // Redirect to home if not authenticated
        return <Navigate to="/" />;
    }

    return children; // Render children components if authenticated
};

export default ProtectedRoute;
