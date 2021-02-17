import { createAction } from "@reduxjs/toolkit";

const createUserRequest = createAction("USER/userRequest");
const createUserSuccess = createAction("USER/userSuccess");
const createUserError = createAction("USER/userError");

const addUserRequest = createAction("USER/addRequest");
const addUserSuccess = createAction("USER/addSuccess");
const addUserError = createAction("USER/addError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUserRequest,
  createUserSuccess,
  createUserError,

  addUserRequest,
  addUserSuccess,
  addUserError,
};
