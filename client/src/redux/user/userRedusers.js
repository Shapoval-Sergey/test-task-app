import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

const createNewUser = createReducer(
  {},
  {
    [userActions.createUserSuccess]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  createNewUser,
});
