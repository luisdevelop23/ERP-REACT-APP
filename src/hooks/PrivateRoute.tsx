import { Navigate, Route } from "react-router-dom";
import { isAuthenticated } from "../plugins/js-cookie/js-cookie.plugin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? (
          <Component />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
