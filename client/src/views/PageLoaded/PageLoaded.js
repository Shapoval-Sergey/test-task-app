import React, { Component } from "react";

import Shared from "../../components/Shared/Shared";
import Form from "../../components/Form/Form";
import { connect } from "react-redux";

import s from "./PageLoaded.module.css";
import userOperations from "../../redux/user/userOperations";

const storageName = "userData";

class PageLoaded extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (!data) {
      this.props.onLoadUser({ email: null, shared: false });
      this.props.onCurrentUser(this.props.userId);
      const user = this.props.user;
      localStorage.setItem(storageName, JSON.stringify(user));
      const storage = JSON.parse(localStorage.getItem(storageName));
      this.setState({ user: storage });
    } else {
      return this.setState({ user: data });
    }
  }

  render() {
    return (
      <div className={s.page}>
        <div className={s.logo}></div>
        <div className={s.content}>
          <Shared user={this.state.user} />
          <Form />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.users.user._id,
  user: state.users.user,
});

const mapDispatchToProps = {
  onLoadUser: userOperations.createUser,
  onCurrentUser: userOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLoaded);
