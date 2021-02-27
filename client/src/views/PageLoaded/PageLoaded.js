import React, { Component } from "react";

import Shared from "../../components/Shared/Shared";
import Form from "../../components/Form/Form";
import { connect } from "react-redux";

import s from "./PageLoaded.module.css";
import userOperations from "../../redux/user/userOperations";

class PageLoaded extends Component {
  componentDidMount() {
    let data = null;
    if (!this.props.user) {
      this.props.onLoadUser({ email: null, shared: false });
      localStorage.setItem("userData", JSON.stringify(this.props.user));
    }
    if (this.props.user) {
      data = JSON.parse(localStorage.getItem("userData"));
    }

    this.props.onCurrentUser(data._id);
  }

  componentDidUpdate(prevProps) {
    let data = null;
    if (prevProps.user.shared !== this.props.user.shared) {
      data = JSON.parse(localStorage.getItem("userData"));

      this.props.onCurrentUser(data._id);

      localStorage["userData"] = JSON.stringify(this.props.user);
    }
    if (prevProps.user.email !== this.props.user.email) {
      data = JSON.parse(localStorage.getItem("userData"));

      this.props.onCurrentUser(data._id);

      localStorage["userData"] = JSON.stringify(this.props.user);
    }
  }

  handleClickShared = () => {
    this.props.onUpdateShared(this.props.user._id, true);
  };

  render() {
    return (
      <div className={s.page}>
        <div className={s.logo}></div>
        <div className={s.content}>
          <Shared
            user={this.props.user && this.props.user}
            onUpdateShared={this.handleClickShared}
          />
          <Form />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  onLoadUser: userOperations.createUser,
  onCurrentUser: userOperations.getCurrentUser,
  onUpdateShared: userOperations.updateUserShared,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLoaded);
