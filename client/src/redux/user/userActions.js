import { createAction } from "@reduxjs/toolkit";

const createUserRequest = createAction("USER/userRequest");
const createUserSuccess = createAction("USER/userSuccess");
const createUserError = createAction("USER/userError");

const getCurrentUserRequest = createAction("USER/getUserRequest");
const getCurrentUserSuccess = createAction("USER/getUserSuccess");
const getCurrentUserError = createAction("USER/getUserError");

const updateEmailRequest = createAction("USER/updateEmailRequest");
const updateEmailSuccess = createAction("USER/updateEmailSuccess");
const updateEmailError = createAction("USER/updateEmailError");

const updateSharedRequest = createAction("USER/updateSharedRequest");
const updateSharedSuccess = createAction("USER/updateSharedSuccess");
const updateSharedError = createAction("USER/updateSharedError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUserRequest,
  createUserSuccess,
  createUserError,

  updateSharedRequest,
  updateSharedSuccess,
  updateSharedError,

  updateEmailRequest,
  updateEmailSuccess,
  updateEmailError,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
