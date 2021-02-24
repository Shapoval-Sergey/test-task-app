import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

const user = createReducer(
  {},
  {
    [userActions.createUserSuccess]: (state, { payload }) => payload,
    [userActions.getCurrentUserSuccess]: (state, { payload }) => payload,
    [userActions.updateEmailSuccess]: (state, { payload }) => payload,
    [userActions.updateSharedSuccess]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  user,
});
