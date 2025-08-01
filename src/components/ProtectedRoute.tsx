import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  // Verificar tanto isAuthenticated como localStorage para mayor seguridad
  const sessionExists = !!localStorage.getItem('session');
  
  return isAuthenticated || sessionExists ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;