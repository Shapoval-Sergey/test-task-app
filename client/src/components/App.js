import React, { Suspense, Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import userOperations from "../redux/user/userOperations";

import routes from "../routes";

class App extends Component {
  componentDidMount() {
    this.props.onCreateUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onCreateUser: userOperations.createUser,
})(App);
