import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const user = useSelector((state) => state.users.user);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        user && user.shared && user.email ? (
          <Redirect to="/final" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
