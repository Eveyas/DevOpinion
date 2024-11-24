import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  role: "Administrador" | "Moderador" | "Usuario";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="../Pages/Login/Login" replace />;
  }

  if (user.role !== role) {
    return <Navigate to="../Pages/Tipos_Desarrollo/Tipos_Desarrollo" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;