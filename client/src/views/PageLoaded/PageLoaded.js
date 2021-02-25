import React, { Component } from "react";

import Shared from "../../components/Shared/Shared";
import Form from "../../components/Form/Form";
import { connect } from "react-redux";

import s from "./PageLoaded.module.css";
import userOperations from "../../redux/user/userOperations";

class PageLoaded extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("userData"));

    this.props.onCurrentUser(data._id);

    if (!data) {
      this.props.onLoadUser({ email: null, shared: false });
      localStorage.setItem("userData", JSON.stringify(this.props.user));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      const data = JSON.parse(localStorage.getItem("userData"));
      if (data) {
        this.props.onCurrentUser(data._id);
      }
      localStorage["userData"] = JSON.stringify(this.props.user);
    }
  }

  handleClickShared = () => {
    this.props.onUpdateShared(this.props.user._id, true);
  };

  render() {
    console.log(this.props.user);

    return (
      <div className={s.page}>
        <div className={s.logo}></div>
        <div className={s.content}>
          <Shared
            user={this.props.user}
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
