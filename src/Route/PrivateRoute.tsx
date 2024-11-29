// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface PrivateRouteProps {
  requiredRole: string;
  element: React.ReactNode;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRole, element }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  if (userRole !== requiredRole && requiredRole !== 'Usuario') {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default PrivateRoute;