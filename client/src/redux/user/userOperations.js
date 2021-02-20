import axios from "axios";

import userActions from "./userActions";

const baseURL = "http://localhost:3000/api/user";

const createUser = () => async (dispatch) => {
  try {
    dispatch(userActions.createUserRequest());

    const { data } = await axios.post(`${baseURL}/actions`);
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

const addUserEmail = ({ email }) => async (dispatch) => {
  try {
    dispatch(userActions.addUserRequest());

    const { data } = await axios.post(`${baseURL}/actions`, { email });
    dispatch(userActions.addUserSuccess(data));
  } catch (e) {
    console.log(e);
    dispatch(userActions.addUserError(e));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser,
  addUserEmail,
};
