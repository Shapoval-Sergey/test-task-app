import axios from "axios";

import userActions from "./userActions";

const baseURL = "http://localhost:3000/api/user";

const createUser = ({ shared, email }) => async (dispatch) => {
  try {
    dispatch(userActions.createUserRequest());
    const { data } = await axios.post(`${baseURL}/actions`, {
      shared: shared,
      email: email,
    });
    console.log("data", data);
    const user = data;
    console.log("user", user);

    if (!data) {
      dispatch(userActions.createUserError());
      return;
    }

    dispatch(userActions.createUserSuccess(user));
  } catch (e) {
    dispatch(userActions.createUserError(e));
  }
};

const getCurrentUser = (userId) => async (dispatch) => {
  try {
    dispatch(userActions.getCurrentUserRequest());

    const { data } = await axios.get(`${baseURL}/actions`, { userId });

    const user = data;

    if (!data) {
      dispatch(userActions.getCurrentUserError());
      return;
    }

    dispatch(userActions.getCurrentUserSuccess(user));
  } catch (e) {
    dispatch(userActions.getCurrentUserError(e));
  }
};

const updateUserEmail = (email) => async (dispatch) => {
  try {
    dispatch(userActions.updateEmailRequest());

    const { data } = await axios.patch(`${baseURL}/actions`, { email: email });
    console.log(data);
    dispatch(userActions.updateEmailSuccess(data));
  } catch (e) {
    console.log(e);
    dispatch(userActions.updateEmailError(e));
  }
};

const updateUserShared = (userId, shared) => async (dispatch) => {
  try {
    dispatch(userActions.updateSharedRequest());

    const { data } = await axios.patch(`${baseURL}/actions`, {
      id: userId,
      shared: shared,
    });

    dispatch(userActions.updateSharedSuccess(data));
  } catch (e) {
    console.log(e);
    dispatch(userActions.updateSharedError(e));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser,
  updateUserEmail,
  updateUserShared,
  getCurrentUser,
};
