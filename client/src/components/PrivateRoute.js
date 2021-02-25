import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isShared = useSelector((state) => state.users.user.shared);
  const isEmail = useSelector((state) => state.users.user.email);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isShared && isEmail ? (
          <Component {...props} />
        ) : (
          <Redirect to="/actions" />
        )
      }
    />
  );
};

export default PrivateRoute;
