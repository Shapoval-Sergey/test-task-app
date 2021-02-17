import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

const createUser = createReducer(
  {},
  {
    [userActions.createUserSuccess]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  createUser,
});
