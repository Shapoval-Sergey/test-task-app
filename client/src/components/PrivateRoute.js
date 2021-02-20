import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isShared = useSelector((state) => state.user.createNewUser.shared);
  const isEmail = useSelector((state) => state.user.createNewUser.email);

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
