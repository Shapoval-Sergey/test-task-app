import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import userSelectors from "../redux/user/userSelectors";

const PublicRoute = ({
  component: Component,
  isShared,
  isEmail,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isShared && isEmail ? <Redirect to="/final" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isShared: userSelectors.isShared(state),
  isEmail: userSelectors.isEmail(state),
});

export default connect(mapStateToProps)(PublicRoute);
