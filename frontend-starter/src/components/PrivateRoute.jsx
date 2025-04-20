import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // You can replace this with context or redux auth state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;