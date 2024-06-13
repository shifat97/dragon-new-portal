import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <span className="loading loading-ring loading-lg h-screen block m-auto"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/account/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
